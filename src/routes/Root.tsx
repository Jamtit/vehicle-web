import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export function Root(): JSX.Element {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
    </>
  );
}
