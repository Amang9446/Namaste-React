import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
  {
    path: "/about",
    element: <AboutUs/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
