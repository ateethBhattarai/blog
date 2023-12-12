import React, { useContext, useEffect, useState } from "react";
import Carausal from "../Components/Carausal";
import Cards from "../Components/Cards";
import { Box, CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import Loader from "../Components/Loader";

const Home = () => {
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/allBlog");
      setBlogData(res.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {blogData === undefined ? (
        <Loader />
      ) : (
        <>
          {/* <Carausal /> */}
          <Paper sx={{ mt: 2, p: 2, minHeight: 600 }} elevation={3}>
            <div className="cards">
              {blogData.map((data) => (
                <Cards
                  key={data._id}
                  id={data._id}
                  title={data.title}
                  summary={data.summary}
                  createdDate={data.updatedAt}
                />
              ))}
            </div>
          </Paper>
        </>
      )}
    </>
  );
};

export default Home;
