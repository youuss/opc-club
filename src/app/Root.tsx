import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";

export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  );
}
