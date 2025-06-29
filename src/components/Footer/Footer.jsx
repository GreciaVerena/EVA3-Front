import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import Logo from '../../../public/Logo_black.svg'; // Asegúrate que la ruta sea correcta

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
        {/* Estructura de tres columnas */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: { xs: 3, md: 0 }
        }}>
          {/* Izquierda - Nombre */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif", // Fuente elegante
              fontWeight: 'bold',
              fontStyle: 'italic',
              letterSpacing: '0.5px',
              mb: { xs: 0, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra sutil
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              color: 'white',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-5px',
                left: { xs: '50%', md: '0' },
                transform: { xs: 'translateX(-50%)', md: 'translateX(0)' },
                width: '50px',
                height: '2px',
                backgroundColor: 'var(--color-dark-beige)',
                transition: 'width 0.3s'
              },
              '&:hover::after': {
                width: { xs: '80px', md: '100px' }
              }
            }}
          >
            TEJELANAS VIVI
          </Typography>
          
          {/* Centro - Logo */}
          <Box 
            component="img"
            src={Logo}
            alt="Logo Tejelanas VIVI"
            sx={{
              height: { xs: '60px', md: '70px' },
              display: 'block',
              mx: 'auto'
            }}
          />
          
          {/* Derecha - Iconos de redes sociales */}
          <Stack 
            direction="row" 
            spacing={1}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-end' }
            }}
          >
            <IconButton 
              aria-label="Facebook" 
              color="inherit" 
              href="https://www.facebook.com/viviana.m.orrego.5/" 
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
              aria-label="Instagram" 
              color="inherit" 
              href="https://www.instagram.com/teje_lanas.vivi/reels/" 
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
              aria-label="WhatsApp" 
              color="inherit" 
              href="https://wa.me/+56976322314" // Reemplaza con tu número real
              target="_blank"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'var(--color-dark-beige)',
                  color: 'var(--color-brown)' 
                } 
              }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>
        
        <Divider sx={{ my: 2, backgroundColor: 'var(--color-medium-beige)', opacity: 0.5 }} />
        
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Tejelanas VIVI. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;