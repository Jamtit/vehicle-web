import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

export function Root(): JSX.Element {
  return (
    <Container sx={{ heigh: "100%" }}>
      <Navbar />
      <>
        <Outlet />
      </>
      <Footer />
    </Container>
  );
}
