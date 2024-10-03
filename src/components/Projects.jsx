import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Projects = () => {
  const images = [
    '/coverprjhead.jpg', // Hero section image
    '/pj1 - Copy.jpg',
    '/pj2 - Copy.jpg',
    '/pj3 - Copy.jpg',
    '/pj4.jpg',
    '/pj5.jpg',
    '/pj6.jpg',
    '/pj7.jpg',
    '/pj8.jpg',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      {/* Hero Section Image */}
      <Box
        component="img"
        src={images[0]}
        alt="Hero Image"
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '400px',
          maxWidth:'px',
          borderRadius: '0px',
          boxShadow: 3,
          marginBottom: '40px',
        }}
      />

      <Typography variant="h4" gutterBottom>
        Image List
      </Typography>

      {/* Two images in one row */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={images[1]}
            alt="Image 2"
            sx={{
           
              borderRadius: '0px',
              width: '335px',
              height: '229px',
              left: '-999999p',
              right: '-999999px',
              top: '-999999px',
              bottom: '-999999px',
              
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={images[2]}
            alt="Image 3"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: 1,
            }}
          />
        </Grid>
      </Grid>

      {/* Four images in a column */}
      <Grid container direction="column" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
        {[3, 4, 5, 6].map((index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={images[index]}
              alt={`Image ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Single image at the bottom */}
      <Box
        component="img"
        src={images[7]}
        alt="Image 8"
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: 1,
        }}
      />
    </Box>
  );
};

export default Projects;
