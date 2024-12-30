


import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Stack, IconButton, Container } from "@mui/material";

import BlackScooterFront from "../../assest/img/G-lite/BlackMain.webp";
import BlackScooterSide from "../../assest/img/G-lite/BlackSide.webp";

import BlueScooterFront from "../../assest/img/G-lite/BlueMain.webp";
import BlueScooterSide from "../../assest/img/G-lite/BlueSide.webp";

import WhiteScooterFront from "../../assest/img/G-lite/WhiteMain.webp";
import WhiteScooterSide from "../../assest/img/G-lite/WhiteSide.webp";

import SkyScooterFront from "../../assest/img/G-lite/SkyMain.webp";
import SkyScooterSide from "../../assest/img/G-lite/SkySide.webp";

import GrayScooterFront from "../../assest/img/G-lite/GrayMain.webp";
import GrayScooterSide from "../../assest/img/G-lite/GraySide.webp";

const colorOptions = [
  { color: "#8AD0DD", name: "Sky Blue" },
  { color: "#000000", name: "Black" },
  { color: "#FFFFFF", name: "White" },
  { color: "#0133AA", name: "Blue" },
  { color: "#62899C", name: "Gray" },
];

const ScooterDetails = () => {
  const [selectedColor, setSelectedColor] = useState("Black");

  const getScooterImages = () => {
    switch (selectedColor) {
      case "Sky Blue":
        return { front: SkyScooterFront, side: SkyScooterSide };
      case "Black":
        return { front: BlackScooterFront, side: BlackScooterSide };
      case "White":
        return { front: WhiteScooterFront, side: WhiteScooterSide };
      case "Blue":
        return { front: BlueScooterFront, side: BlueScooterSide };
      case "Gray":
        return { front: GrayScooterFront, side: GrayScooterSide };
      default:
        return { front: BlackScooterFront, side: BlackScooterSide };
    }
  };

  const getSelectedColorHex = () => {
    const colorObj = colorOptions.find((color) => color.name === selectedColor);
    return colorObj ? colorObj.color : "#000000";
  };

  const [maxSpeed, setMaxSpeed] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [motorPower, setMotorPower] = useState(0);

  // Independent countdown functions for each counter
  const countdown = (target, setter, delay = 50) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += 1;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, delay);
  };

  useEffect(() => {
    countdown(75, setMaxSpeed);  // Max Speed counter
    countdown(50, setMaxRange); // Max Range counter
    countdown(100, setMotorPower); // Motor Power counter with faster speed
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: 4,
          px: 2,
        }}
      >
        {/* Header Section */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: selectedColor === "White" ? "#000000" : getSelectedColorHex(),
                textTransform: "capitalize",
                fontFamily: "cardo",
              }}
            >
              {selectedColor}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="start">
            <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "cardo" }}>
              G-LITE
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content Section */}
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {/* Specifications */}
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ p: 3, backgroundColor: "#F5F5F5", borderRadius: 2, textAlign: "center" }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="body2" color="#1E1E1E" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                    MAX SPEED
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {maxSpeed} Km
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="#1E1E1E" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                    MAX RANGE
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {maxRange} Km
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="#1E1E1E" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                    MOTOR POWER
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {motorPower} W
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Scooter Images */}
          <Grid item xs={12} sm={12} md={7}>
            <Box display="flex" justifyContent="center" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
              <img
                src={getScooterImages().front}
                alt="Front View"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              <img
                src={getScooterImages().side}
                alt="Side View"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </Box>
          </Grid>

          {/* Color Selector */}
          <Grid item xs={12} sm={12} md={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "#F5F5F5",
                borderRadius: 50,
                py: 3,
                mx: { xs: 0, md: 5 },
              }}
            >
              {colorOptions.map((color) => (
                <IconButton
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: color.color,
                    border: selectedColor === color.name ? "2px solid black" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ScooterDetails;
