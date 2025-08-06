import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home/Home';
import Dashboard from './page/dashboard/Dashboard';
import Page from './page/Page';
import Layout from './layout/Layout';
import Cartpage from './page/Cart/Cartpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cartpage/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"*",
        element:<Page/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;