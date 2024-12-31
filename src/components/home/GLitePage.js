import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Lite from '../../assest/img/home/LiteBike.jpg';
import img1 from '../../assest/img/G-lite/Frame.png';
import img2 from '../../assest/img/G-lite/Frame (1).png';
import img3 from '../../assest/img/G-lite/Group.png';

const GLitePage = () => {
    const [count, setCount] = useState(0); // State for dynamic count

    useEffect(() => {
        // Initialize AOS with infinite animation
        AOS.init({
            duration: 2000,
            // easing: "ease-in-out",
            once: false,
            // mirror: true, // Repeats animations when scrolling back
        });

        // Animate count from 0 to 75
        let start = 0;
        const end = 75;
        const duration = 8000; // Increased duration to 8 seconds
        const increment = 1;
        const intervalTime = (duration / end) * increment;

        const interval = setInterval(() => {
            start += increment;
            if (start > end) {
                clearInterval(interval);
                start = end;
            }
            setCount(start);
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: 6,
            }}
        >
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ height: { md: 700 } }}>
                {/* Left Side: One Charge Text */}
                <Grid item xs={12} md={4}>
                    <Box
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: '"Nunito", sans-serif',
                                        color: '#000',
                                        fontWeight: 600,
                                        fontSize: 20,
                                    }}
                                >
                                    One Charge And Get Up To
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    sx={{
                                        mt: 1,
                                        color: '#FB7C00',
                                        fontSize: { xs: 50, sm: 80, md: 100 },
                                        fontFamily: '"Nunito", sans-serif',
                                    }}
                                >
                                    {count}Km
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* Center: Scooter Image */}
                <Grid item xs={12} md={4}>
                    <Box
                        textAlign="center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        <Box>
                            <Box sx={{ fontSize: 33, fontWeight: 600 }}>G-LITE</Box>
                            <Box sx={{ fontSize: { xs: 24, lg: 33 }, fontFamily: '"Nunito", sans-serif', }}>Classic, Timeless, Secure, Upgraded.</Box>
                        </Box>
                        <Typography
                            component="img"
                            src={Lite}
                            sx={{
                                maxWidth: "100%",
                                width: { xs: '90%', sm: '100%' },
                                height: "100%",
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Side: Details Section */}
                <Grid item xs={12} md={4} height={'100%'}>
                    <Box
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        sx={{
                            position: "relative",
                            backgroundColor: "#f4f4f4",
                            padding: "20px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                left: { xs: '-75%', lg: '-70%' },
                                width: "100%",
                                height: "110%",
                                backgroundColor: 'white',
                                borderRadius: '100%'
                            }}
                        />

                        <Box sx={{ textAlign: "center", zIndex: 1, mt: { xs: 4, md: 'unset' }, display: { xs: 'flex' }, justifyContent: 'center' }}>
                            <Box sx={{ width: { xs: 160 } }}>
                                <img
                                    src={img1}
                                    alt="Top Speed"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#666", marginTop: "10px" }}>
                                    TOP SPEED
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    With a continuous speed of 25 km/h
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ textAlign: "center", zIndex: 1, mt: { xs: 4, md: 'unset' }, display: { xs: 'flex' }, justifyContent: 'center' }}>
                            <Box sx={{ width: { xs: '50%' } }}>
                                <img
                                    src={img2}
                                    alt="Motor Power"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#666", marginTop: "10px" }}>
                                    MOTOR POWER
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    250W BLDC Hub Motor
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ textAlign: "center", zIndex: 1, mt: { xs: 4, md: 'unset' }, display: { xs: 'flex' }, justifyContent: 'center' }}>
                            <Box sx={{ width: { xs: 160 } }}>
                                <img
                                    src={img3}
                                    alt="Battery"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#666", marginTop: "10px" }}>
                                    BATTERY
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    48V 30Ah/60V 30Ah NMC safe lithium-ion Battery
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GLitePage;
