import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper";

import video1 from '../../assest/video/Video1.mp4';
import video2 from '../../assest/video/Video2.mp4';
import video3 from '../../assest/video/Video3.mp4';
import video4 from '../../assest/video/Video1.mp4';
import video5 from '../../assest/video/Video2.mp4';
import video6 from '../../assest/video/Video3.mp4';

const Testimonials = () => {
    const videos = [video1, video2, video3, video4, video5, video6];

    return (
        <Box sx={{overflow: "hidden", scrollbarWidth: "none"}}>
            <Box>
                <Box sx={{width: "100%", textAlign: "center", mt: {xs: 3, sm: 5}}}>
                    {/* Title */}
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            fontWeight: "700",
                            fontSize: {xs: "28px", md: "40px", lg: "46px"},
                            fontFamily: "cardo",
                        }}
                    >
                        Testimonials
                    </Typography>

                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        {/* Subtitle */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "500",
                                fontSize: {xs: "13px", md: "20px", lg: "19px"},
                                fontFamily: "nunito",
                                width: {xs: "100%", sm: "80%", md: "70%", lg: "60%"},
                            }}
                        >
                            Wayonaa Ev Fastest-Growing Company Shaping the Future of Electric
                            Vehicles Here's Customers Feedback
                        </Typography>
                    </Box>

                    {/* Video Slider */}
                    <Box className="swiper-container main">
                        <Swiper
                            // modules={[Pagination, Navigation, Autoplay]}
                            slidesPerView={2.8}
                            centeredSlides={true}
                            loop={true}
                            style={{alignItems: 'center'}}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            spaceBetween={30}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                },
                                900: {
                                    slidesPerView: 3,
                                },
                                600: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 15
                                },
                                400: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 2
                                },
                                200: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 1

                                }
                            }}
                            className="swiper-wrapper"
                        >
                            {videos.map((video, index) => (
                                <SwiperSlide key={index} style={{
                                    width: "80%",
                                    // height: '400px',
                                    // "&.swiper-slide-active": {
                                    //     backgroundColor: 'red',
                                    //     transform: "scale(2)",
                                    //     width: "100%",
                                    //     height: "6000px",
                                    // },

                                }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            borderRadius: "7px",
                                            overflow: "hidden",
                                            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                            transition: "transform 0.5s ease, height 0.5s ease, width 0.5s ease",
                                            // width: "80%",
                                            // height: "300px",
                                            // "&.swiper-slide-active": {
                                            // backgroundColor: 'red',
                                            //     transform: "scale(2)",
                                            //     width: "100%",
                                            //     height: "400px",
                                            // },
                                        }}
                                        className="video-slide"
                                    >
                                        <Box
                                            component="video"
                                            src={video}
                                            muted
                                            loop
                                            autoPlay
                                            playsInline
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Box>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>

                    <style>
                        {`
              .main .swiper-slide {
                transition: transform 0.5s ease, opacity 0.5s ease;
              }
             .main .swiper-wrapper{
              margin-block: 80px !important;
              }
               @media (max-width: 400px) {
           .main .swiper-wrapper {
                margin-block: 10px !important;
            }
        }
           @media (max-width: 800px) {
           .main .swiper-wrapper {
                margin-block: 30px !important;
            }
        }
          @media (max-width: 1080px) {
           .main .swiper-wrapper {
                margin-block: 30px !important;
            }
        }
             .main .swiper-slide .video-slide {
                transform: scale(0.7);
              }
             .main .swiper-slide-active .video-slide {
                transform: scale(1.3);
                //  width:800px;
                //  height: 400px; 
                opacity: 1;
                
              }

              .main .swiper-slide:not(.swiper-slide-active) {
                opacity: 0.6; /* Dim non-active slides */
              }

              video::-webkit-media-controls {
                display: none !important; /* Hide video controls */
              }

              video {
                pointer-events: none; /* Disable interaction with the video */
              }
            `}
                    </style>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;
