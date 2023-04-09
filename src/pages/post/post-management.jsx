import React from "react";
import Layout from "../../layout/layout";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";

import './post-management.scss';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PostManagement = () => {

    return(
        <Layout>
            <section id={"post-management-bg"}>
                <div className={'image-uploader'}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>

                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>

                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>

                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </div>
                <div id={"post-management-inputs"}>
                    <TextField
                        label="Title"
                        id="outlined-size-small"
                        size="small"
                        className={"text-fields"}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        className={"text-fields"}
                    />
                    <Button variant="contained">Publish</Button>
                </div>
            </section>
        </Layout>
    )

}

export default PostManagement;
