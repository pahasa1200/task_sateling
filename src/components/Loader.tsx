import {Box, CircularProgress} from "@mui/material";
import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getFetching} from "../store/modules/result/selectors";

const Loader: FC = () => {
    const isFetching = useSelector(getFetching)

    return (
        <>
            {isFetching && (
                <Box sx={{textAlign: "center", marginTop: "60px"}}>
                    <CircularProgress/>
                </Box>
            )}
        </>
    );
};

export default Loader;
