
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from '../pages/CardPage.jsx';
import TryOnPage from "../pages/TryOnPage.jsx";

const routes = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
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
      <App />
    </RouterProvider>
  </ChakraProvider>
)
