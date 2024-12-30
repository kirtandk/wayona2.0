import React from 'react';
import { Box, Typography, Grid, Avatar, Card, CardContent, Rating, Container, } from '@mui/material';
import Google from '../../assest/img/home/Google.webp'
import Googl from '../../assest/img/home/Googl.webp'
import Avtar from '../../assest/img/home/Avtar.webp'

const Verified = () => {
    const reviews = [
        {
            name: 'Ajay Patel',
            text: 'I love to ride this as no noise during the ride. Comfort level is up to standards. I would recommend buying it if you are looking for a new journey.',
            rating: 5,
            avatar: Avtar,
        },
        {
            name: 'Ajay Patel',
            text: 'I love to ride this as no noise during the ride. Comfort level is up to standards. I would recommend buying it if you are looking for a new journey.',
            rating: 5,
            avatar: Avtar,
        },
        {
            name: 'Ajay Patel',
            text: 'I love to ride this as no noise during the ride. Comfort level is up to standards. I would recommend buying it if you are looking for a new journey.',
            rating: 5,
            avatar: Avtar,
        },
        {
            name: 'Ajay Patel',
            text: 'I love to ride this as no noise during the ride. Comfort level is up to standards. I would recommend buying it if you are looking for a new journey.',
            rating: 5,
            avatar: Avtar,
        },
    ];

    return (
        <>
            <Box px={{md:7,xs:1}}>
                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Typography
                            component="img"
                            src={Googl}
                            sx={{
                                width: { xs: '80px', sm: '110px' },
                                mr: { sm: 1 },
                                mb: { xs: 2, sm: 0 }
                            }}
                        />
                        <Typography variant="h4" gutterBottom sx={{ color: '#1E1E1E', m: 0, fontFamily: '"Cardo", serif', fontWeight: '700', fontSize: { xs: '1.5rem', sm: '2rem' }, textAlign: { xs: 'center', sm: 'left' } }} >
                            Verified Reviews
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {reviews.map((review, index) => (
                            <Grid item xs={12} md={6} lg={3} key={index} height={{xl:264,lg:220}} >
                                <Card sx={{ boxShadow: 3, borderRadius: 2,height:"100%" }}>
                                    <CardContent sx={{display:"flex",justifyContent:"space-between" ,flexDirection:"column",height:"100%"}}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                                            <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                                            <Typography component="img" src={Google} sx={{ width: '32px' }} />
                                        </Box>
                                        <Typography variant="body2" color="#1E1E1E" sx={{ fontFamily: '"Nunito", sans-serif' ,fontSize: {xl:15,lg:12}}}>
                                            {review.text} <Typography variant="body2" color="#000" component="span" sx={{ fontFamily: '"Nunito", sans-serif', textDecoration: 'underline' }}>Read More</Typography>
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                            <Avatar src={review.avatar} alt={review.name} sx={{ mr: 1 }} />
                                            <Typography variant="body1" sx={{ fontFamily: '"Nunito", sans-serif' }}>
                                                {review.name}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Verified