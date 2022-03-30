import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {ROUTES} from "../const";

export const NotFoundPage: FC = () => (
  <Box
    component="div"
    sx={{ display: "grid", placeItems: "center center" }}
  >
    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '700' }}> 
      Your word not found :-(
    </Typography>
    <Button
      component={Link}
      to={ROUTES.HOME}
      variant="contained"
      color="primary"
    >
      Return
    </Button>
  </Box>
);
