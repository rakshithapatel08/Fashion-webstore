import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClothesCard from "./ClothesCard";

const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <ClothesCard />
                <ClothesCard />
                <ClothesCard />
                <ClothesCard />
            </Slider>
        </div>
    );
}

export default Carousel;