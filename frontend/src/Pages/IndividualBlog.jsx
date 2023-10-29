import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { format, formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const imageLink =
  "https://imgs.search.brave.com/fXd4lPQ-VGV-38zBBz8Qwp-6YXaRcPDoK2GEZaU599g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw";

const IndividualBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState();
  //   console.log(id);
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/${id}`);
      setBlogData(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!blogData) {
    return "";
  }

  return (
    <>
      <Container sx={{ py: 2 }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {blogData.title}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
              color: "grey",
            }}
          >
            {blogData.createdAt.toString() !== blogData.updatedAt.toString() ? (
              <>
                Last Edited:
                {format(new Date(blogData.createdAt), " MMM d, yyyy HH:mm")}
              </>
            ) : (
              <>
                Created :
                {format(new Date(blogData.createdAt), " MMM d, yyyy HH:mm")}
              </>
            )}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              textAlign: "center",
              color: "dimgrey",
              fontWeight: "bold",
            }}
          >
            {blogData.title}
          </Typography>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Link to={`/blog/edit/${blogData._id}`}>
              <Button variant="contained">Edit</Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ maxHeight: 380, borderRadius: 1.5, overflow: "hidden" }}>
          <img src={imageLink} alt="photo" width={"100%"} />
        </Box>
        <Box sx={{ mt: 4, lineHeight: 1.8 }}>{blogData.description}</Box>
      </Container>
    </>
  );
};

export default IndividualBlog;
