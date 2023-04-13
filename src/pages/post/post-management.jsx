import React, {useEffect, useState} from "react";
import Layout from "../../layout/layout";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";

import './post-management.scss';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
import * as Api from "../../service/apis";

const PostManagement = () => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState(0);

    const [file1, setFile1] = useState(null);
    const [file1_url, setFile1_url] = useState(null);

    const [file2, setFile2] = useState(null);
    const [file2_url, setFile2_url] = useState(null);

    const [file3, setFile3] = useState(null);
    const [file3_url, setFile3_url] = useState(null);

    const [file4, setFile4] = useState(null);
    const [file4_url, setFile4_url] = useState(null);

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        if (!Cookies.get("foodies_user_id")) navigate("/login");
        setUserId(Number(Cookies.get("foodies_user_id")));
    }, [])

    const upload1 = (e) => {
        const file = e.target.files[0];
        setFile1(file);
        // Convert file to Blob and create URL
        const fileUrl = URL.createObjectURL(file);
        setFile1_url(fileUrl);
    }
    const upload2 = (e) => {
        const file = e.target.files[0];
        setFile2(file);
        // Convert file to Blob and create URL
        const fileUrl = URL.createObjectURL(file);
        setFile2_url(fileUrl);
    }
    const upload3 = (e) => {
        const file = e.target.files[0];
        setFile3(file);
        // Convert file to Blob and create URL
        const fileUrl = URL.createObjectURL(file);
        setFile3_url(fileUrl);
    }
    const upload4 = (e) => {
        const file = e.target.files[0];
        setFile4(file);
        // Convert file to Blob and create URL
        const fileUrl = URL.createObjectURL(file);
        setFile4_url(fileUrl);
    }

    const removeImg= (id) => {
        switch (id) {
            case 1:
                setFile1(null)
                setFile1_url(null)
                break;
            case 2:
                setFile2(null)
                setFile2_url(null)
                break;
            case 3:
                setFile3(null)
                setFile3_url(null)
                break;
            case 4:
                setFile4(null)
                setFile4_url(null)
                break;
        }
    };

    const submitCreatePost = () => {
        if(title && description) {

            if(file1 || file2 || file3 || file4) {

                const formData = new FormData();
                formData.append('userId', userId.toString());
                formData.append('title', title);
                formData.append('description', description);
                // if(file1) formData.append('image1', file1);
                // if(file2) formData.append('image2', file2);
                // if(file3) formData.append('image3', file3);
                // if(file4) formData.append('image4', file4);

               formData.append('image1', file1 ? file1 : "");
               formData.append('image2', file2 ? file2 : "");
               formData.append('image3', file3 ? file3 : "");
               formData.append('image4', file4 ? file4 : "");


                Api.createPost(formData).then(r => {
                    if(r.success) {
                        swal("Success!", r.data.msg, "success");
                        navigate("/profile")
                    } else {
                        swal("Sorry!", r.data.msg, "error");
                    }
                })

            } else {
                swal("Invalid Input", "Please upload a photo", "error");
            }

        } else {
            swal("Invalid Input", "Please fill title and description", "error");
        }
    }

    return (
        <Layout>
            <section id={"post-management-bg"}>
                <div id="image-uploader-set1">

                    <div className={'image-uploader'}>
                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload1}/>
                                {!file1_url && <PhotoCamera/>}
                                {file1_url && <img src={file1_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file1_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(1)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>

                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload2}/>
                                {!file2_url && <PhotoCamera/>}
                                {file2_url && <img src={file2_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file2_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(2)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>

                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload3}/>
                                {!file3_url && <PhotoCamera/>}
                                {file3_url && <img src={file3_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file3_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(3)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>

                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload4}/>
                                {!file4_url && <PhotoCamera/>}
                                {file4_url && <img src={file4_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file4_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(4)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>
                    </div>

                </div>

                <div id="image-uploader-set2">

                    <div className={'image-uploader'}>
                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload1}/>
                                {!file1_url && <PhotoCamera/>}
                                {file1_url && <img src={file1_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file1_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(1)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>

                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload2}/>
                                {!file2_url && <PhotoCamera/>}
                                {file2_url && <img src={file2_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file2_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(2)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>
                    </div>
                    <div className={'image-uploader'}>
                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload3}/>
                                {!file3_url && <PhotoCamera/>}
                                {file3_url && <img src={file3_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file3_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(3)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>

                        <div>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={upload4}/>
                                {!file4_url && <PhotoCamera/>}
                                {file4_url && <img src={file4_url} width={100} alt=""/>}
                            </IconButton>
                            {
                                file4_url &&
                                <IconButton style={{
                                    color: "red",
                                    background: "pink",
                                    border: "1px solid red",
                                    marginTop: "-80px",
                                    marginLeft: "-31px"
                                }}
                                            onClick={() => removeImg(4)}
                                            component="div"
                                >
                                    <DeleteForeverIcon/>
                                </IconButton>
                            }
                        </div>
                    </div>

                </div>

                <div id={"post-management-inputs"}>
                    <TextField
                        label="Title"
                        id="outlined-size-small"
                        size="small"
                        className={"text-fields"}
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        className={"text-fields"}
                        value={description}
                        onChange={e => {
                            setDescription(e.target.value)
                        }}
                    />
                    <Button variant="contained" onClick={submitCreatePost}>Publish</Button>
                </div>
            </section>
        </Layout>
    )

}

export default PostManagement;
