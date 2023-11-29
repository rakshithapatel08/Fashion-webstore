import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import { Box } from "@chakra-ui/react";
import Newsletter from "../components/Newsletter";
import HeroBannerSale from "../components/HeroBannerSale";

const App = () => {
    return (
        <Box>
            <Box>
                <HeroBannerSale/>
            </Box>
            <Carousel />
            <Box>
                <Banner />
            </Box>
            <Box>
                <Newsletter />
            </Box>
        </Box>
    )
}

export default App;