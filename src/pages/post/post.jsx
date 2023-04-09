import React from "react";
import Layout from "../../layout/layout";
import {Carousel} from "react-responsive-carousel";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import './post.scss';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import User from "../../assets/user.png";

const Post = () => {

    return(
        <Layout>
            <section id={"post-bg"}>
                    <Carousel>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="600"
                            image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                        />
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="600"
                            image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                        />
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="600"
                            image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                        />
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="600"
                            image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
                        />
                    </Carousel>

                    <h1>Best Cake in the world</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae esse molestiae neque perferendis quo reiciendis, tempore unde ut vitae! Alias aperiam corporis ducimus facere iure molestiae neque provident ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae esse molestiae neque perferendis quo reiciendis, tempore unde ut vitae! Alias aperiam corporis ducimus facere iure molestiae neque provident ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae esse molestiae neque perferendis quo reiciendis, tempore unde ut vitae! Alias aperiam corporis ducimus facere iure molestiae neque provident ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae esse molestiae neque perferendis quo reiciendis, tempore unde ut vitae! Alias aperiam corporis ducimus facere iure molestiae neque provident ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae esse molestiae neque perferendis quo reiciendis, tempore unde ut vitae! Alias aperiam corporis ducimus facere iure molestiae neque provident ullam?
                    </p>

                <div>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        <span className={'react-counts'}>20</span>
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <ChatBubbleIcon />
                        <span className={'react-counts'}>99+</span>
                    </IconButton>

                </div>

                <div id={'comment'}>

                    <div>
                        <div style={{marginBottom: '15px'}}>Add your comment here.</div>
                        <TextField
                            label="Comment"
                            id="outlined-size-small"
                            size="small"
                            multiline
                            rows={4}
                            className={"text-fields"}
                        />
                        <Box component="div" sx={{width: "100%", textAlign: 'end'}}>
                            <Button variant="contained" sx={{marginTop: '10px'}} endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>

                    </div>

                    <div>

                        <div className={'post-comment'}>
                            <div className={'post-comment-user'}>
                                <img src={User}title="user" alt="user.png" width={50}/>
                                <h4>Andrew Tate</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem beatae consequatur corporis cumque exercitationem facilis impedit inventore labore nemo nostrum numquam officiis perspiciatis provident quae quam repudiandae, sed.
                            </p>
                        </div>

                        <div className={'post-comment'}>
                            <div className={'post-comment-user'}>
                                <img src={User}title="user" alt="user.png" width={50}/>
                                <h4>Andrew Tate</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem beatae consequatur corporis cumque exercitationem facilis impedit inventore labore nemo nostrum numquam officiis perspiciatis provident quae quam repudiandae, sed.
                            </p>
                        </div>

                        <div className={'post-comment'}>
                            <div className={'post-comment-user'}>
                                <img src={User}title="user" alt="user.png" width={50}/>
                                <h4>Andrew Tate</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem beatae consequatur corporis cumque exercitationem facilis impedit inventore labore nemo nostrum numquam officiis perspiciatis provident quae quam repudiandae, sed.
                            </p>
                        </div>

                        <div className={'post-comment'}>
                            <div className={'post-comment-user'}>
                                <img src={User}title="user" alt="user.png" width={50}/>
                                <h4>Andrew Tate</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem beatae consequatur corporis cumque exercitationem facilis impedit inventore labore nemo nostrum numquam officiis perspiciatis provident quae quam repudiandae, sed.
                            </p>
                        </div>

                        <div className={'post-comment'}>
                            <div className={'post-comment-user'}>
                                <img src={User}title="user" alt="user.png" width={50}/>
                                <h4>Andrew Tate</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem beatae consequatur corporis cumque exercitationem facilis impedit inventore labore nemo nostrum numquam officiis perspiciatis provident quae quam repudiandae, sed.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
        </Layout>
    )

}

export default Post;
