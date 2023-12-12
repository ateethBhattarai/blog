import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
