import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Box } from "@mui/material";

export function Root(): JSX.Element {
  return (
    <Container className="root-container">
      <Navbar />
      <Box className="root-container_outlet-box">
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
