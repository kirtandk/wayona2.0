import {Container, Typography} from '@mui/material'
import React, {useState} from "react";
import {Box, Slider, Select, MenuItem, Grid} from "@mui/material";

const Saveing = () => {

    const [dailyKms, setDailyKms] = useState(60);
    const [mileage, setMileage] = useState(50);

    const monthlySavings = ((dailyKms / mileage) * 85 * 30).toFixed(0);
    const annualSavings = (monthlySavings * 12).toFixed(0);
    return (
        <>
            <Box sx={{backgroundColor: "#f9f9f9", py: 2}}>
                <Container maxWidth={'xl'}>
                    <Typography sx={{
                        fontFamily: '"Nunito", sans-serif',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: {xs: 'column', sm: 'row'},
                        textAlign: {xs: 'center', sm: 'left'},
                        fontSize: {xs: '18px', sm: '22px', md: '29px'},
                        fontWeight: 800,
                        mt: 2,
                    }}>
                        <Typography variant='span' sx={{color: '#FB7C00', mx: 1,}}>Savings Meter</Typography>Compared To<Typography
                        variant='span' sx={{color: '#FB7C00', mx: 1,}}>Petrol</Typography> @100/Litre
                    </Typography>

                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mb: 5, mt: 3}}>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={4} sx={{my: 2}}>
                                <Box sx={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    borderRadius: 4,
                                    p: 2,
                                    borderLeft: '6px solid #FB7C00',
                                    pl: 2,
                                    height: "100%",
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: "column"
                                }}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Typography variant="body1" fontWeight="600" sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17}
                                        }}>
                                            Daily Travel Kms
                                        </Typography>

                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Typography variant="body1" fontWeight="600" sx={{
                                                fontFamily: '"Nunito", sans-serif',
                                                fontSize: {lg: 23, md: 21, sm: 27, xs: 17},
                                                marginRight: 1
                                            }}>
                                                Km
                                            </Typography>
                                            <Select
                                                value={dailyKms}
                                                onChange={(e) => setDailyKms(e.target.value)}
                                                size="small"
                                                sx={{width: 70}}
                                            >
                                                {[...Array(101).keys()].map((km) => (
                                                    <MenuItem key={km} value={km}>
                                                        {km}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2.5}>
                                        <Typography sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17}
                                        }}>0km</Typography>
                                        <Slider
                                            value={dailyKms}
                                            onChange={(e, newValue) => setDailyKms(newValue)}
                                            min={0}
                                            max={100}
                                            sx={{color: "#FF7A00", mx: 1, height: {xs: 10, lg: 14}}}
                                        />
                                        <Typography sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17}
                                        }}>100km</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4} sx={{my: 2}}>
                                <Box sx={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    borderRadius: 4,
                                    p: 2,
                                    borderLeft: '6px solid #FB7C00',
                                    pl: 2,
                                    height: "100%",
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: "column"
                                }}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Typography variant="body1" fontWeight="600" sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17}
                                        }}>
                                            Mileage in kms
                                        </Typography>
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Typography variant="body1" fontWeight="600" sx={{
                                                fontFamily: '"Nunito", sans-serif',
                                                fontSize: {lg: 23, md: 21, sm: 27, xs: 17},
                                                marginRight: 1
                                            }}>
                                                Km
                                            </Typography>
                                            <Select
                                                value={mileage}
                                                onChange={(e) => setMileage(e.target.value)}
                                                size="small"
                                                sx={{width: 70}}
                                            >
                                                {[...Array(101).keys()].map((km) => (
                                                    <MenuItem key={km} value={km}>
                                                        {km}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2.5}>
                                        <Typography sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 20, xs: 16}
                                        }}>0km</Typography>
                                        <Slider
                                            value={mileage}
                                            onChange={(e, newValue) => setMileage(newValue)}
                                            min={0}
                                            max={100}
                                            sx={{color: "#FF7A00", mx: 1, height: {xs: 10, lg: 14}}}
                                        />
                                        <Typography sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17}
                                        }}>100km</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4} sx={{my: 2}}>
                                {/*<Box sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 4, p: 2, textAlign: "center", borderLeft: '6px solid #FB7C00',height:'100%',display:'flex',justifyContent:'space-between',flexDirection:"column" }} >*/}
                                {/*    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>*/}
                                {/*        <Typography variant="body1" fontWeight="600" sx={{ fontFamily: '"Nunito", sans-serif',fontSize: {lg:23,md:21,sm:27,xs:22} }}>*/}
                                {/*            Monthly Savings*/}
                                {/*        </Typography>*/}
                                {/*        <Typography variant="body1" fontWeight="600" sx={{ fontFamily: '"Nunito", sans-serif',fontSize: {lg:23,md:21,sm:27,xs:22} }}>*/}
                                {/*            Annual Savings*/}
                                {/*        </Typography>*/}
                                {/*    </Box>*/}

                                {/*    <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',mt: {xs:4,md:0}}}>*/}
                                {/*        <Typography variant="h5" color="black" fontWeight="600" fontSize={{xl:34 ,xs:30}} >*/}
                                {/*            ₹{monthlySavings}*/}
                                {/*        </Typography>*/}
                                {/*        <Typography variant="h5" color="black" fontWeight="600" fontSize={{xl:34 ,xs:30}} >*/}
                                {/*            ₹{annualSavings}*/}
                                {/*        </Typography>*/}
                                {/*    </Box>*/}
                                {/*</Box>*/}
                                <Box sx={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    borderRadius: 4,
                                    p: 2,
                                    textAlign: "center",
                                    borderLeft: '6px solid #FB7C00',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box>
                                        <Typography variant="body1" fontWeight="600" sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17},
                                            flexWrap: 'nowrap'
                                        }}>
                                            Monthly Savings
                                        </Typography>
                                        <Typography variant="h5" color="black" fontWeight="600"
                                                    fontSize={{xl: 34, sm: 30,xs:26}}  sx={{mt:4}}>
                                            ₹{monthlySavings}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" fontWeight="600" sx={{
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: {lg: 23, md: 21, sm: 27, xs: 17},
                                            flexWrap: 'nowrap'
                                        }}>
                                            Annual Savings
                                        </Typography>
                                        <Typography variant="h5" color="black" fontWeight="600"
                                                    fontSize={{xl: 34, sm: 30,xs:26}} sx={{mt:4}}>
                                            ₹{annualSavings}
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Saveing
