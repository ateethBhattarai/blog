import { Box, Paper } from "@mui/material";
import React from "react";

const CardContent = () => {
  const imageLink =
    "https://imgs.search.brave.com/fXd4lPQ-VGV-38zBBz8Qwp-6YXaRcPDoK2GEZaU599g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw";
  return (
    <>
      <Paper elevation={3} sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "320px", maxHeight: "320px" }}>
          <img src={imageLink} height={"100%"} alt="photo" />
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            explicabo, beatae nostrum, omnis minima ullam repellat quibusdam
            veniam officia dolorum, accusamus modi obcaecati provident dicta
            amet deleniti adipisci inventore tenetur placeat ipsam rerum
            perferendis ut? Rerum distinctio culpa architecto minima quia
            officiis maiores numquam dignissimos ratione dolores iusto sit, a
            placeat! Impedit dicta nam error repellendus iure quisquam ipsa,
            perferendis modi, corporis reiciendis temporibus voluptatem aut.
            Fugiat optio ex ullam blanditiis in delectus aliquid magni
            doloremque eaque? Tempore veritatis harum officia veniam, beatae
            saepe similique illo, sunt quisquam nobis iusto amet! Praesentium
            nobis dicta facere ab maiores ad quos voluptate?
          </p>
        </Box>
      </Paper>
    </>
  );
};

export default CardContent;
