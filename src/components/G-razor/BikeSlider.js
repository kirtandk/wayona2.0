import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import I1 from '../../assest/img/G-rozar/slider/Frame521.webp';
import I2 from '../../assest/img/G-rozar/slider/Frame520.webp';

const cardData = [
    { id: 1, image: I1 },
    { id: 2, image: I2 },
];

const BikeSlider = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Typography
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: '"Cardo", serif',
                    fontSize: { xs: 20, sm: 22, md: 26, lg: 28 },
                    fontWeight: 600,
                    textAlign: 'center',
                    mt: 5,
                    mb: 2,
                }}
            >
                UNFORGETTABLE RIDE
                <Typography
                    variant="span"
                    sx={{
                        color: '#FB7C00',
                        fontSize: { xs: 20, sm: 22, md: 26, lg: 28 },
                        fontWeight: 600,
                        fontFamily: '"Cardo", serif',
                        marginTop: { xs: '8px', sm: '0' },
                        ml: 2,
                    }}
                >
                    BEYOND IMAGINATION!
                </Typography>
            </Typography>

            <Container>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={isSmDown ? 1 : 2}
                    navigation={false}
                    loop={true}
                >
                    {cardData.map((card) => (
                        <SwiperSlide key={card.id}>
                             <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 400,
                                    borderRadius: '2px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={card.image}
                                    alt={`Slide ${card.id}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        transform: 'scaleX(0.5)',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default BikeSlider;
