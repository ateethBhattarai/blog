import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { format, formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../ContextAPI/UserContext";

const imageLink =
  "https://imgs.search.brave.com/fXd4lPQ-VGV-38zBBz8Qwp-6YXaRcPDoK2GEZaU599g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw";

const IndividualBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = React.useContext(UsersContext);

  const [blogData, setBlogData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/${id}`);
      setBlogData(res.data);
    } catch (error) {
      alert("No blog data found. Please try again.");
      navigate("/");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteBlog = async () => {
    try {
      await axios.delete(`http://localhost:8000/${id}`);
      console.log("blog deleted!!");
      navigate("/");
    } catch (error) {
      alert("Error deleting blog. Please try again.");
    }
  };

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
            {blogData?.author?.username
              ? "Created by: @" + blogData.author.username
              : ""}
          </Typography>

          {user?.username === blogData?.author?.username && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* for edit purpose */}
              <Box sx={{ textAlign: "center", mb: 2, mt: 1 }}>
                <Link to={`/blog/edit/${blogData._id}`}>
                  <Button variant="contained">Edit</Button>
                </Link>
              </Box>

              {/* for deletion purpose */}
              <Box sx={{ textAlign: "center", mb: 2, mt: 1 }}>
                <Button variant="contained" color="error" onClick={deleteBlog}>
                  Delete
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        <Box
          sx={{ maxHeight: 380, borderRadius: 1.5, mt: 2, overflow: "hidden" }}
        >
          <img src={imageLink} alt={blogData.title} width={"100%"} />
        </Box>
        <Box sx={{ mt: 4, lineHeight: 1.8 }}>{blogData.description}</Box>
      </Container>
    </>
  );
};

export default IndividualBlog;
