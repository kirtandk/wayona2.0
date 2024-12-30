// import React from 'react'
// import Slider from '../components/home/Slider'
// import LightIntro from '../components/home/LightIntro'
// import OneIntro from '../components/home/OneIntro'
// import RazorIntro from '../components/home/RazorIntro'
// import Testimonials from '../components/home/Testimonials'
// import Verified from '../components/home/Verified'
// import Faq from '../components/home/Faq'
// import Saveing from '../components/home/Saveing'
// import GLitePage from '../components/home/GLitePage'
// import Video from '../components/home/Video'
// import GOnePage from '../components/home/GOnePage'
// import GRazorPage from '../components/home/GRazon'
// import BikeAbout from '../components/home/BikeAbot'

// const Home = () => {
//   return (
//     <>
//       <Slider />
//       <Saveing />
//       <Video />
//       <GLitePage />
//       <LightIntro />
//       <GOnePage />
//       <OneIntro />
//       <GRazorPage />
//       <RazorIntro />
//       <BikeAbout />
//       <Testimonials />
//       <Verified />
//       <Faq />
//     </>
//   )
// }

// export default Home


import React from "react";
import { motion } from "framer-motion";
import Slider from "../components/home/Slider";
import LightIntro from "../components/home/LightIntro";
import OneIntro from "../components/home/OneIntro";
import RazorIntro from "../components/home/RazorIntro";
import Testimonials from "../components/home/Testimonials";
import Verified from "../components/home/Verified";
import Faq from "../components/home/Faq";
import Saveing from "../components/home/Saveing";
import GLitePage from "../components/home/GLitePage";
import Video from "../components/home/Video";
import GOnePage from "../components/home/GOnePage";
import GRazorPage from "../components/home/GRazon";
import BikeAbout from "../components/home/BikeAbot";
import { Box } from "@mui/material";

const Home = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1} },

  };

  return (
    <Box sx={{overflow:"auto",scrollbarWidth:"none"}}>
      <>
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Slider />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Saveing />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Video />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <GLitePage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <LightIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <GOnePage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <OneIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <GRazorPage />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <RazorIntro />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <BikeAbout />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Verified />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} >
        <Faq />
      </motion.div>
    </>
    </Box>
  );
};

export default Home;
