import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from '../pages/CardPage.jsx';
import TryOnPage from "../pages/TryOnPage.jsx";
import Layout from '../components/Layout.jsx';
import AppContextWrapper from '../context/appContext';
import DetailsPage from '../pages/DetailsPage.jsx';
import './index.css';
import Success from '../pages/Success.jsx';
import Error404 from '../pages/Error404.jsx';

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
    {
      path: "/products/:id",
      element: <DetailsPage/>,
    },
    {
      path: "/success",
      element: <Success/>
    },
    {
      path: "*",
      element: <Error404/>
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <AppContextWrapper>
  <RouterProvider router={routes}>
  <Layout>
    <App />
  </Layout>
  </RouterProvider>
  </AppContextWrapper>
  </ChakraProvider>
)
