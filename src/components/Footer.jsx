import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import './Footer.css';  // Import the external CSS
import Flogo from '../assets/logo.svg';

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Footer Logo and Description */}
          <Grid item xs={12} md={5}>
            <img src={Flogo}alt="Footer Logo" className="footer-logo" />
            <Typography variant="body2" className="footer-text">
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper.
            </Typography>
            <Box className="social-icons">
              <IconButton aria-label="Facebook" href="#" className="social-icon">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" href="#" className="social-icon">
                <Twitter />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="#" className="social-icon">
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="GitHub" href="#" className="social-icon">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* Helpful Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Helpful Links
            </Typography>
            <Link href="#" className="footer-link">About Us</Link>
            <Link href="#" className="footer-link">Features</Link>
            <Link href="#" className="footer-link">FAQs</Link>
            <Link href="#" className="footer-link">Blog</Link>
          </Grid>

          {/* Support Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Support
            </Typography>
            <Link href="#" className="footer-link">Privacy Policy</Link>
            <Link href="#" className="footer-link">Terms of Use</Link>
            <Link href="#" className="footer-link">Support Center</Link>
            <Link href="#" className="footer-link">Contact</Link>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-heading">
              Contact Us
            </Typography>
            <Typography variant="body2" className="contact-info">
              455 West Orchard Street<br />Kings Mountain, NC 28086
            </Typography>
            <Typography variant="body2" className="contact-info">
              Phone: (272) 211-7370
            </Typography>
            <Typography variant="body2">
              E-Mail: <Link href="mailto:support@yourbrand.com" className="footer-link">support@yourbrand.com</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box className="copyright">
          <Typography variant="body2" className="copyright-text">
            © 2021 Inox. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
