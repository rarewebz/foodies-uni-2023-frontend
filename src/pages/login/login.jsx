import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from '../../assets/logo.png';

import './login.scss';

const Login = () => {
    return(
        <section id={'login-bg'}>
            <div id={'login-box'}>
                <img src={Logo} title="foodies.com" alt="logo.png" width={200}/>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    size="small"
                    className={"text-fields"}
                />
                <TextField
                    type="password"
                    label="Password"
                    id="outlined-size-small"
                    size="small"
                    className={"text-fields"}
                />
                <Button variant="contained">Login</Button>
            </div>
        </section>
    )
}

export default Login;
