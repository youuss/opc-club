import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Members from "./pages/Members";
import MemberDetail from "./pages/MemberDetail";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "members", Component: Members },
      { path: "members/:id", Component: MemberDetail },
      { path: "about", Component: About },
    ],
  },
]);
