import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EditPost from "./pages/EditPost";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";
import Home from "./pages/Home";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "AddPost",
        element: <AddPost />,
      },
      {
        path: "EditPost",
        element: <EditPost />,
      },

    ],
  },
]);

root.render(
 
    <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
