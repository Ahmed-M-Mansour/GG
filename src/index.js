import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import "tw-elements";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/404Error";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Products from "./pages/ProductsOverview";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contacts from "./pages/Contacts";
import Docs from "./pages/Docs";
import Valves from "./pages/Valves";
import BatterflyValves from "./pages/valves/BatterflyValves";
import Pneumatic from "./pages/Pneumatic";
import Instrumentation from "./pages/Instrumentation";
import ProductDetails from "./pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/divisions",
    element: <Divisions />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/valves",
    element: <Valves />,
  },
  {
    path: "/products/valves/Batterfly",
    element: <BatterflyValves />,
  },
  {
    path: "/products/pneumatic",
    element: <Pneumatic />,
  },
  {
    path: "/products/instrumentation",
    element: <Instrumentation />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/products/details",
    element: <ProductDetails/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
