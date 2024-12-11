import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout/>,
       children:[
          {
               path: "/",
               element: <Home/>,
          },
          {
               path: "/products",
               element: <Products/>,
          },
          {
               path: "/about",
               element: <About/>,
          },
          {
               path: "/contact-us",
               element: <Contact/>,
          },
       ]
     },
   ]);