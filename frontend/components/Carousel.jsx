import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"

const Carousel = () => {
    
    const settings = {
      dots: true,
      infinite: true,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <CarouselCard/>
                <CarouselCard/>
                <CarouselCard/>
                <CarouselCard/>
                <CarouselCard/>
            </Slider>
        </div>
    );
}

export default Carousel;