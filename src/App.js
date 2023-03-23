import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Project from "./components/Project";
import About from "./components/About";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Plan from "./components/Plan";
import Project2 from "./components/Project2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/plan", element: <Plan /> },
      { path: "/project", element: <Project /> },
      { path: "/contact", element: <Contact /> },
      { path: "/whatClothes", element: <Video /> },
      { path: "/project2", element: <Project2 /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
