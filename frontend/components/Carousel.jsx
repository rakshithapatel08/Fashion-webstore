import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, useMediaQuery } from "@chakra-ui/react";

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

  if (!data) {
    return "Loading...";
  }

  return (
    <Box pt={20} pb="30px" w="100vw">
    <Slider {...settings}>
      <CarouselCard image={data[0].garment_img_url} />
      <CarouselCard image={data[1].garment_img_url} />
      <CarouselCard image={data[2].garment_img_url} />
      <CarouselCard image={data[3].garment_img_url} />
      <CarouselCard image={data[4].garment_img_url} />
    </Slider>
    </Box>
  );
};

export default Carousel;
