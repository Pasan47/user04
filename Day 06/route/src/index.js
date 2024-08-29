import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import AllPost from './pages/AllPost';
import AppPost from './pages/AppPost';
import { Provider } from 'react-redux';
import store from './store/store';
import Protected from './component/Protected';
import Login from './pages/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App/>, //Initial render

    children: [
      {
        path: "/AddPost",
        // element: <Protected children = {<AddPost/>}/>
        element: <AddPost/>

      },
      {
        path: "Login",
        element: <Protected children = {<Login/>}/>
      },


      {
        path: "/AllPost",
        element: <AllPost/>
      },
      {
        path:"EditPost/:param",
        element: <EditPost/>
      },
      {
        path:"AppPost/:param",
        element: <AppPost/>
      }


    ]






  }
]



)

root.render(
  <Provider store = {store}>
      <RouterProvider router={router}></RouterProvider>
  </Provider>

  
);



