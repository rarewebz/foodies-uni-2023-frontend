import React from "react";
import Layout from "../../layout/layout";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import User from "../../assets/user.png";
import {Carousel} from "react-responsive-carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";

import './wall.scss';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";


const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Wall = () => {

    return(
        <Layout>
            <section id={'wall-bg'}>

                <Box sx={{textAlign: 'center'}}>
                    <Button variant="contained" sx={{width: '56%', marginTop: '10px', color: 'white'}}>Create a post</Button>
                </Box>

                {
                    x.map(r =>
                        <Card sx={{ maxWidth: 600 }} className={'wall-card'}>
                            <CardHeader
                                avatar={
                                    <img src={User}title="user" alt="user.png" width={50}/>
                                }
                                title="Andrew Tate"
                                subheader="September 14, 2016"
                            />

                            <Carousel>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="340"
                                    image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="340"
                                    image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="340"
                                    image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                />
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="340"
                                    image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                />
                            </Carousel>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    <span className={'react-counts'}>20</span>
                                </IconButton>
                                <IconButton aria-label="add to favorites">
                                    <ChatBubbleIcon />
                                    <span className={'react-counts'}>99+</span>
                                </IconButton>
                                <Button size="small">View More</Button>
                            </CardActions>

                        </Card>
                    )
                }

            </section>
        </Layout>
    )

}

export default Wall;
