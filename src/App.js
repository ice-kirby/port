import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Product from "./components/Product";
import Project from "./components/Project";
import About from "./components/About";
import Video from "./components/Video";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <Product /> },
      { path: "/project", element: <Project /> },
      { path: "/contact", element: <Contact /> },
      { path: "/whatClothes", element: <Video /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
