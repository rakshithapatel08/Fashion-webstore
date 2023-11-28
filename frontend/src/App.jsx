import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import { Box } from "@chakra-ui/react";

const App = () => {
    return (
        <Box>
            <Carousel/>

            <Box>
                <Banner/>
            </Box>
        </Box>
    )
}

export default App;