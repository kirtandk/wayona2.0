

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import Slider1 from "../../assest/img/home/SliderBanner.webp";
import Slider2 from "../../assest/img/home/SliderBanner.webp";
import Slider3 from "../../assest/img/home/SliderBanner.webp";
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Define desktop and mobile sliders
  const mainSliderDesktop = [Slider1, Slider2, Slider3];
  const mainSliderMobile = [Slider1, Slider2, Slider3];
  const mainSlider = isMobile ? mainSliderMobile : mainSliderDesktop;

  return (
    <Box className="mainSlider" sx={{ position: "relative" }}>
      <Swiper
        ref={swiperRef}
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (bulletIndex, className) => {
            return (
              <span class="${className} custom-dot">
                <span class="dash"></span>
              </span>
            );
          },
        }}
      >
        {mainSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <Box>
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "100vh",
                  borderRadius: "0",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: {lg:"50%",xs:'82%',sm:"90%"},
          left: { xs: "36%", sm: "42%" ,lg: "50px" },
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
          color: "white",
          border: "2px solid white",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: {lg:"50%",xs:'82%',sm:"90%"},
          right: { xs: "36%", sm: "42%" ,lg: "50px" },
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
          color: "white",
          border: "2px solid white",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
