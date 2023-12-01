import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, useMediaQuery, Flex, Spinner } from "@chakra-ui/react";

const Carousel = () => {
  const [data, setData] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [isTab] = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => setData(res.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: isMobile ? 1 : (isTab ? 2 : 3),
    slidesToScroll: 1,
  };

  if(!data){
    return (
        <Flex justifyContent="center" alignItems="center" minH="60vh">
        <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.400"
            size="xl"
        />
        </Flex>
    )
  }

  return (
    <Box pt={20} pb="30px" w="100vw">
    <Slider {...settings}>
      <CarouselCard image={data[0].garment_img_url} id={data[0]._id}/>
      <CarouselCard image={data[1].garment_img_url} id={data[1]._id}/>
      <CarouselCard image={data[2].garment_img_url} id={data[2]._id}/>
      <CarouselCard image={data[3].garment_img_url} id={data[3]._id}/>
      <CarouselCard image={data[4].garment_img_url} id={data[4]._id}/>
    </Slider>
    </Box>
  );
};

export default Carousel;
