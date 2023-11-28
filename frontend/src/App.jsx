// import Carousel from "../components/Carousel";
// import CardComponent from "../components/CardComponent";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const App = () => {
    return (
        <Box bg="gray.800">
            App
            <Outlet />
        </Box>
    )
}

export default App;