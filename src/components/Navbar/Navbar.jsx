import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Productos', 'Nosotros', 'Contacto'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static"
      className="bg-brown"
      sx={{ 
        backgroundColor: 'var(--color-brown)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo para pantallas grandes */}
        <Box
          component="a"
          href="#"
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            mr: 2,
          }}
        >
          <Box
            component="img"
            src="/Logo_white.svg"
            alt="Logo"
            sx={{
              height: 80,
              width: 'auto',
            }}
          />
        </Box>

          {/* Menú hamburguesa para móviles */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menú de navegación"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'var(--color-light-beige)',
                  borderTop: '3px solid var(--color-brown)'
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'var(--color-brown)',
                    '&:hover': {
                      backgroundColor: 'var(--color-medium-beige)'
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo para pantallas pequeñas */}
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              flexGrow: 1,
              mr: 2,
            }}
          >
            <Box
              component="img"
              src="/Logo_white.svg"
              alt="Logo"
              sx={{
                height: 50,
                width: 'auto',
              }}
            />
          </Box>


          {/* Menú para pantallas grandes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  mx: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;