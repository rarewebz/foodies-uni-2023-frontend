import React from "react";
import Box from "@mui/material/Box";

const Layout = ({children}) => {

    return(
        <Box>
            <Box component="main" className={"main-section"}>
                {children}
            </Box>
        </Box>
    )

}

export default Layout;
