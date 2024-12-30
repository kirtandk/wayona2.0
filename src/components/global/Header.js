


import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Drawer, Link, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assest/img/Logo.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Header = () => {
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    const [mobileSubMenuOpenSecond, setMobileSubMenuOpenSecond] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }



    const handleSubMenuToggle = () => {
        setMobileSubMenuOpen(!mobileSubMenuOpen); // Toggle submenu
    };


return (
    <>
      <Box sx={{ my: 2 }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            {/* Logo Section */}
            <Grid item xs={6} sm={3} md={2}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/" color="inherit" underline="none">
                  <Typography component="img" src={Logo} sx={{ width: { xs: '90%', sm: '100%' }, maxWidth: '150px' }} />
                </Link>
              </Box>
            </Grid>
            {/* Menu and Social Icons */}
            <Grid item xs={6} sm={9} md={10} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* E-Scooters */}
              <Box sx={{
                display: { xs: 'none', md: 'flex' }, alignItems: 'center', position: "relative", "&:hover": {
                  "& .megaMenu": {
                    display: "block"
                  }
                }
              }}>
                <Typography sx={{
                  mx: 2, fontFamily: '"poppins", sans-serif', cursor: 'pointer', fontSize: { md: '14px', lg: '18px' }, transition: 'color 0.2s ease',
                  '&:hover': { color: '#FB7C00', cursor: 'pointer' },py:0.5
                }} >
                  E-Scooters
                  <Box>
                    <Box
                        className="megaMenu"
                        sx={{
                          backgroundColor: "#F9F9F9",
                          fontWeight: "600",
                          zIndex: "10",
                          width: "100%",
                          py: { xs: 3, md: 6 },
                          display: "none",
                          top: "7%",
                          left: "0",
                          position: "fixed",
                        }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <Typography
                              fontWeight="bold"
                              sx={{
                                mb: { xs: 2, md: 1 },
                                fontFamily: '"poppins", sans-serif',
                                color: "#B4B4B4",
                                fontSize: { xs: "20px", md: "33px" },
                                fontWeight: "600",
                                textAlign: { xs: "center", md: "right" },
                              }}
                          >
                            E-SCOOTER
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box sx={{ mx: { xs: 2, md: 8 } }}>
                            <Box sx={{ mb: { xs: 2, md: 3 } }}>
                              <Link href="/grazor" color="inherit" underline="none">
                                <Typography
                                    sx={{
                                      fontFamily: '"poppins", sans-serif',
                                      fontWeight: "700",
                                      color: "#000",
                                      fontSize: { xs: "16px", md: "18px" },
                                      transition: "color 0.2s ease",
                                      "&:hover": { color: "#FB7C00", cursor: "pointer" },
                                      textAlign: { xs: "start", md: "left" },
                                    }}
                                >
                                  G-Razor
                                  <Typography
                                      sx={{
                                        color: "#B4B4B4",
                                        fontFamily: '"poppins", sans-serif',
                                        fontWeight: "700",
                                        fontSize: { xs: "14px", md: "16px" },
                                      }}
                                  >
                                    Modern. Innovative. Advanced. Unparalleled.
                                  </Typography>
                                </Typography>
                              </Link>
                            </Box>
                            <Box>
                              <Link href="/glite" color="inherit" underline="none">
                                <Typography
                                    sx={{
                                      fontFamily: '"poppins", sans-serif',
                                      fontWeight: "700",
                                      color: "#000",
                                      fontSize: { xs: "16px", md: "18px" },
                                      transition: "color 0.2s ease",
                                      "&:hover": { color: "#FB7C00", cursor: "pointer" },
                                      textAlign: { xs: "start", md: "left" },
                                    }}
                                >
                                  G-Lite
                                  <Typography
                                      sx={{
                                        color: "#B4B4B4",
                                        fontFamily: '"poppins", sans-serif',
                                        fontWeight: "700",
                                        fontSize: { xs: "14px", md: "16px" },
                                      }}
                                  >
                                    Classic. Timeless. Secure. Upgraded.
                                  </Typography>
                                </Typography>
                              </Link>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box sx={{ mr: { xs: 0, md: 12 }, mx: { xs: 2, md: 0 } }}>
                            <Box sx={{ mb: { xs: 2, md: 3 } }}>
                              <Link href="/gone" color="inherit" underline="none">
                                <Typography
                                    sx={{
                                      fontFamily: '"poppins", sans-serif',
                                      fontWeight: "700",
                                      color: "#000",
                                      fontSize: { xs: "16px", md: "18px" },
                                      transition: "color 0.2s ease",
                                      "&:hover": { color: "#FB7C00", cursor: "pointer" },
                                      textAlign: { xs: "start", md: "left" },
                                    }}
                                >
                                  G-One
                                  <Typography
                                      sx={{
                                        color: "#B4B4B4",
                                        fontFamily: '"poppins", sans-serif',
                                        fontWeight: "700",
                                        fontSize: { xs: "14px", md: "16px" },
                                      }}
                                  >
                                    Sportier. Speedier. Safer.
                                  </Typography>
                                </Typography>
                              </Link>
                            </Box>
                            <Box>
                              <Typography
                                  sx={{
                                    fontFamily: '"poppins", sans-serif',
                                    fontWeight: "700",
                                    color: "#000",
                                    fontSize: { xs: "16px", md: "18px" },
                                    transition: "color 0.2s ease",
                                    "&:hover": { color: "#FB7C00", cursor: "pointer" },
                                    textAlign: { xs: "start", md: "left" },
                                  }}
                              >
                                Astino Coming Soon!!
                                <Typography
                                    sx={{
                                      color: "#B4B4B4",
                                      fontFamily: '"poppins", sans-serif',
                                      fontWeight: "700",
                                      fontSize: { xs: "14px", md: "16px" },
                                    }}
                                >
                                  Award winning. Extra ordinary. Unbeatable. Best-in-class.
                                </Typography>
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                </Typography>
              </Box>
              {/* Dealer */}
              <Box sx={{
                display: { xs: 'none', md: 'flex' }, alignItems: 'center', position: "relative", "&:hover": {
                  "& .megaMenu2": {
                    display: "block"
                  }
                }
              }}>
                <Typography sx={{ mx: 2, fontFamily: '"poppins", sans-serif', cursor: 'pointer', fontSize: { md: '14px', lg: '18px' }, py:0.5, '&:hover': { color: '#FB7C00', cursor: 'pointer' }, }} onMouseEnter={(e) => handleMenuOpen(e, 'dealer')}>
                  Dealer
                  <Box className="megaMenu2" sx={{ bgcolor: '#F9F9F9', zIndex: "10", width: '100%', py: { xs: 3, md: 6 }, display: "none", top: "7%", left: "0%", position: "fixed" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography fontWeight="bold" sx={{ mb: { xs: 2, md: 1 }, fontFamily: '"poppins", sans-serif', color: '#B4B4B4', fontSize: { xs: '20px', md: '33px' }, textAlign: { xs: 'center', md: 'right' }, }}>
                          DEALER
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ mx: { xs: 2, md: 8 } }}>
                          <Box sx={{ mb: { xs: 2, md: 3 } }}>
                            <Link href="/dealerlocator" color="inherit" underline="none">
                              <Typography sx={{ fontFamily: '"poppins", sans-serif', fontWeight: '700', color: "#000", fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                                Dealer Locator
                                <Typography sx={{ color: '#B4B4B4', fontFamily: '"poppins", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                                  Find a Wayonaa showroom near you
                                </Typography>
                              </Typography>
                            </Link>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ mr: { xs: 0, md: 12 }, mx: { xs: 2, md: 0 } }}>
                          <Box sx={{ mb: { xs: 2, md: 3 } }}>
                            <Link href="/becomedealer" color="inherit" underline="none">
                              <Typography sx={{ fontFamily: '"poppins", sans-serif', fontWeight: '700', color: "#000", fontSize: { xs: '16px', md: '18px' }, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' }, textAlign: { xs: 'start', md: 'left' }, }}>
                                Become a Dealer
                                <Typography sx={{ color: '#B4B4B4', fontFamily: '"poppins", sans-serif', fontWeight: '700', fontSize: { xs: '14px', md: '16px' }, }}>
                                  Join the Electric Revolution
                                </Typography>
                              </Typography>
                            </Link>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Typography>
              </Box>

{/* Other Links */}
              <Typography sx={{ mx: 2, fontFamily: '"poppins", sans-serif', fontSize: { md: '14px', lg: '18px' },display:{lg:"block",md:"block",sm:"none",xs:"none"}, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                <Link href="/aboutus" color="inherit" underline="none">
                  About Us
                </Link>
              </Typography>
              <Typography sx={{ mx: 2, fontFamily: '"poppins", sans-serif', fontSize: { md: '14px', lg: '18px' }, display:{lg:"block",md:"block",sm:"none",xs:"none"}, transition: 'color 0.2s ease', '&:hover': { color: '#FB7C00', cursor: 'pointer' } }}>
                <Link href="/contactus" color="inherit" underline="none">
                  Contact Us
                </Link>
              </Typography>
              <Box sx={{display:"flex", mt:1.3}}>
                <Typography sx={{padding:"0 8px",margin:"0 0 0 12px",display:{lg:"block",md:"block",sm:"none",xs:"none"},"&:hover":{color:"#FB7C00",transition:".3s"}}}><FacebookIcon sx={{fontSize:"25px"}}></FacebookIcon></Typography>
                <Typography sx={{padding:"0 8px",display:{lg:"block",md:"block",sm:"none",xs:"none"},"&:hover":{color:"#FB7C00",transition:".3s"}}}><InstagramIcon sx={{fontSize:"25px"}}></InstagramIcon></Typography>
                <Typography sx={{padding:"0 8px",display:{lg:"block",md:"block",sm:"none",xs:"none"},"&:hover":{color:"#FB7C00",transition:".3s"}}}><YouTubeIcon sx={{fontSize:"25px"}}></YouTubeIcon></Typography>
              </Box>
              {/* Hamburger menu - Visible on small screens */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
                <IconButton onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Mobile Drawer for Menu */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }} onClick={() => handleSubMenuToggle()} onMouseEnter={(e) => handleMenuOpen(e, 'eScooters')} >
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                  <Typography>
                      E-Scooters
                  </Typography>
                  <Typography>
                      {!mobileSubMenuOpen ? <KeyboardArrowRightIcon/> :
                          <KeyboardArrowDownIcon/>}
                  </Typography>
              </Box>
              {mobileSubMenuOpen && <Box
                  sx={{
                      width: "100%",
                      color: "black",
                      // display: "flex !important",
                      // justifyContent: "space-between",
                      // alignItems: "center",

                  }}
              >
                  <Box>G-Razor</Box>
                  <Box>G-Lite</Box>
                  <Box>G-One</Box>
                  <Box>Astino Coming Soon!!</Box>
              </Box>}
          </Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }} onClick={() => setMobileSubMenuOpenSecond(!mobileSubMenuOpenSecond)} onMouseEnter={(e) => handleMenuOpen(e, 'dealer')} >

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography>
                        Dealer
                    </Typography>
                    <Typography>
                        {!mobileSubMenuOpenSecond ? <KeyboardArrowRightIcon/> :
                            <KeyboardArrowDownIcon/>}
                    </Typography>
                </Box>
                {mobileSubMenuOpenSecond && <Typography
                    sx={{
                        width: "100%",
                        color: "black",

                    }}
                >
                    <Typography>Dealer Locator</Typography>
                    <Typography>Become a Dealer</Typography>
                </Typography>}

            </Typography>
            <Link href="/aboutus" color="inherit" underline="none">About Us</Link>
          </Typography>
          <Typography sx={{ my: 2, cursor: 'pointer', '&:hover': { color: '#FB7C00' } }}>
            <Link href="/contactus" color="inherit" underline="none">Contact Us</Link>
          </Typography>
            <Box sx={{display:"flex", mt:1.3}}>
                <Typography sx={{"&:hover":{color:"#FB7C00",transition:".3s"}}}><FacebookIcon sx={{fontSize:"25px"}}></FacebookIcon></Typography>
                <Typography sx={{px:2,"&:hover":{color:"#FB7C00",transition:".3s"}}}><InstagramIcon sx={{fontSize:"25px"}}></InstagramIcon></Typography>
                <Typography sx={{"&:hover":{color:"#FB7C00",transition:".3s"}}}><YouTubeIcon sx={{fontSize:"25px"}}></YouTubeIcon></Typography>
            </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default Header;