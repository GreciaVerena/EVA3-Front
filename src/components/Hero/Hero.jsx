import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const Hero = () => {
    return (
        <Box 
            className="bg-light-beige"
            sx={{
                py: { xs: 6, md: 10 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                            <Typography 
                                variant="h2" 
                                component="h1" 
                                className="text-brown"
                                sx={{ 
                                    fontWeight: 'bold',
                                    mb: 2
                                }}
                            >
                                TEJELANAS VIVI
                            </Typography>
                            
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    mb: 4,
                                    color: 'var(--color-brown)',
                                    opacity: 0.9
                                }}
                            >
                                Descubre el arte de tejer a mano: productos únicos, hechos con pasión y dedicados a tu estilo.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    className="btn-primary"
                                    sx={{
                                        backgroundColor: 'var(--color-brown)',
                                        '&:hover': {
                                            backgroundColor: '#A05C4D'
                                        }
                                    }}
                                >
                                    Comenzar
                                </Button>
                                
                                <Button 
                                    variant="outlined" 
                                    size="large"
                                    sx={{
                                        borderColor: 'var(--color-brown)',
                                        color: 'var(--color-brown)',
                                        '&:hover': {
                                            borderColor: '#A05C4D',
                                            backgroundColor: 'var(--color-medium-beige)',
                                        }
                                    }}
                                >
                                    Saber más
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box 
                            className="shadow-custom"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                p: 3,
                                height: '100%',
                                minHeight: '300px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--color-medium-beige)'
                            }}
                        >
                            {/* Aquí puedes colocar una imagen o un componente */}
                            <Typography 
                                variant="h4" 
                                className="text-dark-beige"
                                sx={{ textAlign: 'center' }}
                            >
                                Imagen o Contenido Destacado
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            {/* Elementos decorativos */}
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
                    zIndex: 0
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
                    zIndex: 0
                }}
            />
        </Box>
    );
}

export default Hero;