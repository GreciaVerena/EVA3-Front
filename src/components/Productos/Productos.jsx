import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack, Divider } from '@mui/material';

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
      console.log('API response:', data);
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
  
  // Función para formatear precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Box className="bg-light-beige" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Sección de Productos */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          className="text-brown"
          sx={{ fontWeight: 700, mb: 5 }}
        >
          Nuestros Productos
        </Typography>

        {loading ? (
          <Typography variant="body1" align="center">Cargando productos...</Typography>
        ) : productos.length > 0 ? (
          <Grid container spacing={4}>
            {productos.map((producto) => (
              <Grid item xs={12} sm={6} md={4} key={producto.id}>
                <Card 
                  className="shadow-custom"
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '1px solid var(--color-medium-beige)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={producto.imgs[0]}
                    alt={producto.nombre}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" className="text-brown" sx={{ fontWeight: 600, mb: 1 }}>
                      {producto.nombre}
                    </Typography>
                    
                    <Typography variant="h6" sx={{ color: 'var(--color-brown)', fontWeight: 'bold', mb: 2 }}>
                      {formatPrice(producto.precio)}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {producto.descripcion.length > 120 
                        ? `${producto.descripcion.substring(0, 120)}...` 
                        : producto.descripcion}
                    </Typography>
                    
                    {producto.tallas && producto.tallas.length > 0 && (
                      <>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
                          Tallas disponibles:
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
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
                      </>
                    )}
                    
                    {producto.colores && producto.colores.length > 0 && (
                      <>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
                          Colores disponibles:
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
                      </>
                    )}
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

        {/* Sección de Servicios */}
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
            
            <Grid container spacing={4}>
              {servicios.map((servicio) => (
                <Grid item xs={12} sm={6} key={servicio.id}>
                  <Card 
                    className="shadow-custom"
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' },
                      border: '1px solid var(--color-medium-beige)',
                      overflow: 'hidden',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: { xs: '100%', md: '40%' },
                        height: { xs: 200, md: 'auto' }
                      }}
                      image={servicio.imgs[0]}
                      alt={servicio.nombre}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" className="text-brown" sx={{ fontWeight: 600, mb: 1 }}>
                        {servicio.nombre}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'var(--color-dark-beige)', mb: 2 }}>
                        {servicio.fecha}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <strong>Ubicación:</strong> {servicio.ubicacion}
                      </Typography>
                      
                      <Chip 
                        label={`${servicio.cupos} cupos disponibles`} 
                        sx={{ 
                          backgroundColor: 'var(--color-brown)',
                          color: 'white',
                          fontWeight: 'bold'
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