import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import FormComponent from "./pages/FormComponent.jsx";
import Table from "./pages/Table.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<DashBoard />} index />
      <Route path="form" element={<FormComponent />} />
      <Route path="table" element={<Table />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </StrictMode>
);
