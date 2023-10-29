import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blogData, setBlogData] = useState();

  const loadData = async (e) => {
    try {
      const res = await axios.get(`http://localhost:8000/${id}`);
      console.log(res.data);
      setBlogData(res.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  //   console.log(blogData); //loggin blog data

  useEffect(() => {
    loadData();
  }, []);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (!blogData) {
    return "";
  }

  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center", m: "auto" }}>
        Edit Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Title"
          autoFocus
          name="title"
          value={input.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Summary"
          type="text"
          name="summary"
          //   value={blogData.summary}
          placeholder="Summary"
          onChange={handleChange}
        />
        <TextField
          minRows={8}
          multiline={true}
          fullWidth
          margin="normal"
          label="Description"
          type="text"
          name="description"
          //   value={blogData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </Container>
  );
};

export default EditBlog;
