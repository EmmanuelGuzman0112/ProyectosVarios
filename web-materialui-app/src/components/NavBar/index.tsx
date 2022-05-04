import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
              Gabriela Liliana Vanney
            </Typography>
            <Button color="secondary">Acerca de mi</Button>
            <Button color="secondary">Estudios</Button>
            <Button color="secondary">Contactame</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
