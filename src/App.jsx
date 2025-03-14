import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import Docs from './Pages/Docs';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {path: '', element: <Docs />},
  ]
}]);

function App() {
  return <RouterProvider router={router} />
}

export default App
