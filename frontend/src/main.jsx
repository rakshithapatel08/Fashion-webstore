
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from '../pages/CardPage.jsx';
import TryOnPage from "../pages/TryOnPage.jsx";
import Layout from '../components/Layout.jsx';

const routes = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/products",
      element: <CardPage/>,
    },
    {
      path: "/tryon",
      element: <TryOnPage/>,
    },
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <RouterProvider router={routes}>
  <Layout>
    <App />
  </Layout>
  </RouterProvider>
  </ChakraProvider>
)
