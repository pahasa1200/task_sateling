import {Box, CircularProgress} from "@mui/material";
import React, {FC} from "react";

export const Loader: FC = () => {

    return (
        <Box sx={{textAlign: "center", marginTop: "60px"}}>
            <CircularProgress/>
        </Box>
    );
};
