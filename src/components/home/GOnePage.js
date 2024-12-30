


import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Slide } from "@mui/material";
import  One from '../../assest/img/home/OneBike.jpg';

import LiteCon from '../../assest/img/home/LiteCon.webp';
import img1 from "../../assest/img/G-lite/Frame.png";
import img2 from "../../assest/img/G-lite/Frame (1).png";
import img3 from "../../assest/img/G-lite/Group.png";
import Lite from "../../assest/img/home/LiteBike.jpg";

const GLitePage = () => {
    const [count, setCount] = useState(0); // State for dynamic count
    const [animateLeft, setAnimateLeft] = useState(false);
    const [animateBottom, setAnimateBottom] = useState(false);
    const [animateRight, setAnimateRight] = useState(false);

    useEffect(() => {
        // Animate count from 0 to 75
        let start = 0;
        const end = 75;
        const duration = 3000;
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

    useEffect(() => {
        // Trigger animations sequentially
        const timer1 = setTimeout(() => setAnimateLeft(true), 500); // Left part after 500ms
        const timer2 = setTimeout(() => setAnimateBottom(true), 1000); // Bottom part after 1000ms
        const timer3 = setTimeout(() => setAnimateRight(true), 1500); // Right part after 1500ms

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
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
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{height: {md:700}}}>
                {/* Left Side: One Charge Text */}
                <Grid item xs={12} md={4}>
                    <Slide direction="right" in={animateRight} timeout={4000} mountOnEnter unmountOnExit>
                        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>


                            <Box sx={{textAlign: 'center'}}>
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
                                        fontSize: {xs: 50, sm: 80, md: 100},
                                        fontFamily: '"Nunito", sans-serif',
                                    }}
                                >
                                    {count}Km
                                </Typography>
                            </Box>
                        </Box>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Slide direction="up" in={animateBottom} timeout={4000} mountOnEnter unmountOnExit>
                        <Box textAlign="center">
                            <Box>
                                <Box sx={{fontSize: 33 , fontWeight: 600}}>G-LITE</Box>
                                <Box sx={{fontSize: {xs:24,lg:33},   fontFamily: '"Nunito", sans-serif',}}>Classic, Timeless, Secure, Upgraded.</Box>
                            </Box>
                            <Typography
                                component="img"
                                src={One}
                                sx={{
                                    maxWidth: "100%",
                                    width: {xs: '90%', sm: '100%'},
                                    height: "100%",
                                }}
                            />
                        </Box>
                    </Slide>
                </Grid>

                {/* Right Side: LiteCon Image */}
                <Grid item xs={12} md={4} height={'100%'} sx={{height: '100%'}}>
                    <Slide direction="left" in={animateLeft} timeout={4000} mountOnEnter unmountOnExit
                           style={{height: '100%'}}>
                        <Box
                            sx={{
                                position: "relative",
                                // width: "350px",
                                backgroundColor: "#f4f4f4",
                                padding: "20px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                // alignItems: {xs:'end',lg:"center"},
                                height: "100%",
                                // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    // top: -44,
                                    left: '-70%',
                                    width: "100%",
                                    height: "110%",
                                    backgroundColor: 'white',
                                    borderRadius: '100%'
                                }}
                            />

                            <Box sx={{
                                textAlign: "center",
                                zIndex: 1,
                                mt: {xs: 4, md: 'unset'},
                                display: {xs: 'flex', sm: 'unset'},
                                justifyContent: 'center'
                            }}>
                                <Box sx={{width: {xs: 160, sm: 'auto'}}}>
                                    <img
                                        src={img1}
                                        alt="Top Speed"
                                        style={{width: "50px", height: "50px"}}
                                    />
                                    <Typography variant="h6"
                                                sx={{fontWeight: "bold", color: "#666", marginTop: "10px"}}>
                                        TOP SPEED
                                    </Typography>
                                    <Typography variant="body2" sx={{color: "#666"}}>
                                        With a continuous speed of 25 km/h
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{
                                textAlign: "center",
                                zIndex: 1,
                                mt: {xs: 4, md: 'unset'},
                                display: {xs: 'flex', sm: 'unset'},
                                justifyContent: 'center'
                            }}>
                                <Box sx={{width: {xs: 160, sm: 'auto'}}}>
                                    <img
                                        src={img2}
                                        alt="Motor Power"
                                        style={{width: "50px", height: "50px"}}
                                    />
                                    <Typography variant="h6"
                                                sx={{fontWeight: "bold", color: "#666", marginTop: "10px"}}>
                                        MOTOR POWER
                                    </Typography>
                                    <Typography variant="body2" sx={{color: "#666"}}>
                                        250W BLDC Hub Motor
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{
                                textAlign: "center",
                                zIndex: 1,
                                mt: {xs: 4, md: 'unset'},
                                display: {xs: 'flex', sm: 'unset'},
                                justifyContent: 'center'
                            }}>
                                <Box sx={{width: {xs: 160, sm: 'auto'}}}>
                                    <img
                                        src={img3}
                                        alt="Battery"
                                        style={{width: "50px", height: "50px"}}
                                    />
                                    <Typography variant="h6"
                                                sx={{fontWeight: "bold", color: "#666", marginTop: "10px"}}>
                                        BATTERY
                                    </Typography>
                                    <Typography variant="body2" sx={{color: "#666"}}>
                                        48V 30Ah/60V 30Ah NMC safe lithium-ion Battery
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GLitePage;
