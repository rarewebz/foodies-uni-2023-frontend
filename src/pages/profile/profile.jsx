import React from 'react';
import User from '../../assets/user.png';

import './profile.scss';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Carousel} from "react-responsive-carousel";
import Layout from "../../layout/layout";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Profile = () => {

    return(
        <Layout>
            <section id={'profile-bg'}>
                <div id={'profile-details'}>
                    <img src={User}title="user" alt="user.png" width={100}/>
                    <h2>Andrew Tate</h2>
                </div>

                <div id={'profile-post-btn'}>
                    <Button variant="contained">Create a post</Button>
                </div>

                <div id={'profile-post-grid'}>
                    <Grid container spacing={2}>

                        {
                            x.map(r =>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
                                        <Carousel>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                            />
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                            />
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                            />
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                                            />
                                        </Carousel>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
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
                                </Grid>
                            )
                        }


                    </Grid>
                </div>

            </section>
        </Layout>
    )

}

export default Profile;
