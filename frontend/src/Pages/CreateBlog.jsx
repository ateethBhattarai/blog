import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../ContextAPI/UserContext";

const CreateBlog = () => {
  const navigate = useNavigate();

  const { user } = React.useContext(UsersContext);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    description: "",
    author: user?.id,
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
    try {
      const res = await axios.post("http://localhost:8000/create", {
        ...input,
      });
      navigate("/");
    } catch (error) {
      alert(error.response.data);
      console.log(input);
    }
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center", m: "auto" }}>
        Create Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Title"
          autoFocus
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Summary"
          type="text"
          name="summary"
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

export default CreateBlog;
