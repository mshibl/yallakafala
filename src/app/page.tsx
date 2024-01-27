import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/AppFooter";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <AppFooter />
    </Container>
  );
};

export default Home;
