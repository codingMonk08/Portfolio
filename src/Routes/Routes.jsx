import { useRoutes } from "react-router-dom";
import Home from '../components/Pages/Home';
import Project from "../components/Pages/Project/Project";
import Blog from "../components/Pages/Blog/Blog";
import NotFound from "../components/Pages/Not Found";
import About from '../components/Pages/About'
import Layout from "../Layout";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "project", element: <Project /> },
        { path: "blog", element: <Blog /> },
        {path : 'about', element: <About/>}
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
