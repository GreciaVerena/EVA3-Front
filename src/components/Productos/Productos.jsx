import { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardMedia,
  CardContent, Chip, Stack, Divider, Button
} from '@mui/material';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      headers: {
        Authorization: 'Bearer ipss.get',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setProductos(data.data.productos || []);
          setServicios(data.data.servicios || []);
        } else {
          setProductos([]);
          setServicios([]);
        }
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setProductos([]);
        setServicios([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Box id="productos" className="bg-light-beige" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Título Productos */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          className="text-brown"
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Nuestros Productos
        </Typography>

        {loading ? (
          <Typography variant="body1" align="center">Cargando productos...</Typography>
        ) : productos.length > 0 ? (
          <Grid container spacing={4} alignItems="stretch" sx={{ mb: 10, justifyContent: { xs: "center", sm: "flex-start" } }}>
            {productos.map((producto) => (
              <Grid item xs={12} sm={6} md={4} key={producto.id} sx={{ display: 'flex', flex: 1,  minWidth: { xs: '100%', sm: '300px' }}}>
                <Card
                  className="shadow-custom"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--color-medium-beige)',
                    borderRadius: 2,
                    height: '100%',
                    width: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(141, 73, 58, 0.15)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={producto.imgs[0]}
                    alt={producto.nombre}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        className="text-brown"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          overflow: 'hidden'
                        }}
                      >
                        {producto.nombre}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: 'var(--color-brown)',
                          fontWeight: 'bold',
                          mb: 3,
                          fontSize: '1.5rem'
                        }}
                      >
                        {formatPrice(producto.precio)}
                      </Typography>

                      {/* Colores */}
                      {producto.colores?.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Colores:
                          </Typography>
                          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {producto.colores.map((color, index) => (
                              <Chip
                                key={index}
                                label={color}
                                size="small"
                                sx={{
                                  backgroundColor: 'var(--color-medium-beige)',
                                  color: 'var(--color-brown)'
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      )}

                      {/* Tallas */}
                      {producto.tallas?.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Tallas:
                          </Typography>
                          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {producto.tallas.map((talla, index) => (
                              <Chip
                                key={index}
                                label={talla}
                                size="small"
                                sx={{
                                  backgroundColor: 'var(--color-dark-beige)',
                                  color: 'white'
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      )}
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        backgroundColor: 'var(--color-brown)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#A05C4D'
                        }
                      }}
                    >
                      Ver detalles
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" align="center">
            No hay productos disponibles.
          </Typography>
        )}

        {/* Título Servicios */}
        {servicios.length > 0 && (
          <>
            <Divider sx={{ my: 8, borderColor: 'var(--color-medium-beige)' }} />
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              className="text-brown"
              sx={{ fontWeight: 700, mb: 5 }}
            >
              Talleres y Servicios
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
              {servicios.map((servicio) => (
                <Grid item xs={12} sm={6} key={servicio.id} sx={{ display: 'flex' }}>
                  <Card
                    className="shadow-custom"
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      border: '1px solid var(--color-medium-beige)',
                      overflow: 'hidden',
                      borderRadius: 2,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(141, 73, 58, 0.15)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: '100%', md: '40%' },
                        height: { xs: 200, md: 'auto' },
                        objectFit: 'cover'
                      }}
                      image={servicio.imgs[0]}
                      alt={servicio.nombre}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          className="text-brown"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            overflow: 'hidden'
                          }}
                        >
                          {servicio.nombre}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 'bold',
                            color: 'var(--color-dark-beige)',
                            mb: 2
                          }}
                        >
                          {servicio.fecha}
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                          <strong>Ubicación:</strong> {servicio.ubicacion}
                        </Typography>
                      </Box>

                      <Chip
                        label={`${servicio.cupos} cupos disponibles`}
                        sx={{
                          backgroundColor: 'var(--color-brown)',
                          color: 'white',
                          fontWeight: 'bold',
                          alignSelf: 'flex-start'
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
