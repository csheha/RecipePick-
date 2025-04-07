import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [{ path: "/", element: <Home /> }],
  },
  ,
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
