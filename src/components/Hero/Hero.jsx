import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
// Importar solo la imagen de fondo principal
import fondoImage from '../../assets/fondo.jpg';

const Hero = () => {
    // Función para desplazamiento suave a preguntas frecuentes
    const scrollToFAQ = () => {
        const faqSection = document.getElementById('faq');
        if (faqSection) {
            const navbarHeight = 80; // Altura aproximada del navbar
            const additionalOffset = 20; // Espacio adicional
            const sectionTop = faqSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = sectionTop - navbarHeight - additionalOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box 
            id="home"
            sx={{
                py: { xs: 10, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(248, 240, 229, 0.85)', // Overlay con color beige claro semi-transparente
                    zIndex: 1
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box 
                    sx={{ 
                        textAlign: 'center', 
                        maxWidth: '800px', 
                        mx: 'auto', 
                        py: { xs: 6, md: 8 } 
                    }}
                >
                    <Typography 
                        variant="h2" 
                        component="h1" 
                        className="text-brown"
                        sx={{ 
                            fontFamily: "'Playfair Display', 'Times New Roman', serif", 
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            letterSpacing: '0.5px',
                            mb: 2,
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            color: 'var(--color-brown)',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px',
                                height: '3px',
                                backgroundColor: 'var(--color-dark-beige)',
                                transition: 'width 0.3s'
                            },
                            '&:hover::after': {
                                width: '150px'
                            }
                        }}
                    >
                        TEJELANAS VIVI
                    </Typography>
                    
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            mb: 4,
                            color: 'var(--color-brown)',
                            opacity: 0.9,
                            fontWeight: '500',
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            lineHeight: 1.5,
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        Del corazón a tus manos, tejidos artesanales creados por una mujer apasionada por transformar hilos en belleza.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={scrollToFAQ}
                            sx={{
                                backgroundColor: 'var(--color-brown)',
                                fontWeight: 'bold',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    backgroundColor: '#A05C4D',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 4px 8px rgba(141, 73, 58, 0.3)'
                                },
                                transition: 'all 0.3s'
                            }}
                        >
                            Saber más
                        </Button>
                    </Box>
                </Box>
            </Container>
            
            {/* Elementos decorativos - los mantenemos para dar más profundidad */}
            <Box 
                sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-medium-beige)',
                    opacity: 0.5,
                    top: '-100px',
                    right: '-50px',
                    zIndex: 1
                }}
            />
            
            <Box 
                sx={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-dark-beige)',
                    opacity: 0.3,
                    bottom: '-70px',
                    left: '-70px',
                    zIndex: 1
                }}
            />
        </Box>
    );
}

export default Hero;