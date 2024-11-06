import { useRoutes } from "react-router-dom";
import Home from '../components/Pages/Home'
import Project from "../components/Pages/Project/Project";
import Contact from "../components/Pages/Contact/Contact";
import Blog from "../components/Pages/Blog/Blog";
import NotFound from "../components/Pages/Not Found";
import Layout from "../Layout";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Layout />,
        children:[
            {
                path: "",
                element: <Home />,
              },
              {
                path: "/project",
                element: <Project/>,
              },
              {
                path: "/contact",
                element: <Contact />
          },
                {
                path: "/blog",
                element: <Blog />
              },
            
        ]
     },


    { path: "*", element: <NotFound /> },
    
  ]);

  return element;
};

export default ProjectRoutes;
