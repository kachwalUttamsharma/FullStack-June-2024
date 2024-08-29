import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import BannerSlide from "./BannerSlide";

const Banner = () => {
  const [bannerState, SetBannerState] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=1`
      )
      .then((response) => {
        SetBannerState(response.data.results);
      });
  }, []);

  const sliderConfig = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...sliderConfig} buttons={false}>
        {bannerState?.map((banner, b) => {
          return (
            <BannerSlide
              key={banner.id}
              index={b}
              banner={banner}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
