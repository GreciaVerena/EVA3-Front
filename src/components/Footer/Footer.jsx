import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--color-brown)',
        color: 'white',
        py: 3,
        mt: 'auto'
      }}
      className="bg-brown"
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ mb: { xs: 2, md: 0 } }}>
            Mi Aplicación
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <IconButton 
              aria-label="Facebook" 
              color="inherit" 
              href="https://facebook.com" 
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              aria-label="Twitter" 
              color="inherit" 
              href="https://twitter.com" 
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              color="inherit" 
              href="https://instagram.com" 
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              color="inherit" 
              href="https://linkedin.com" 
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              aria-label="GitHub" 
              color="inherit" 
              href="https://github.com" 
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
        
        <Divider sx={{ my: 2, backgroundColor: 'var(--color-medium-beige)', opacity: 0.5 }} />
        
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;