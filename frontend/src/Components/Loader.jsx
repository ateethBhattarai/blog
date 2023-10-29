import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress
        sx={{
          margin: "auto",
        }}
      />
    </Box>
  );
};

export default Loader;
