import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LabImage from "../assets/LAB.png";
import { ThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

const pages = ["Booking", "Services", "Barbers", "About Us", "Images"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const navbarStyles = {
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: 150,
    width: "auto",
  },
};

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext); // Access toggleTheme function from ThemeContext
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme(); // Access current theme

  const handleNavMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleUserMenuOpen = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setAnchorElNav(null);
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 80, justifyContent: "center" }}>
          <Box sx={{ justifyContent: "center" }} style={navbarStyles.logoContainer}>
            <Link to="/">
              <img src={LabImage} alt="Custom Image" style={navbarStyles.logoImage} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleNavMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavMenuClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleNavMenuClose}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 0.5,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{
                  allignItems: "center",
                  mx: 2,
                  my: 2,
                  color: theme.palette.text.secondary,
                  display: "block",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.transparent,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Toggle dark mode button */}
            <Tooltip title="Toggle dark mode">
              <IconButton onClick={toggleTheme} sx={{ ml: 1, color: theme.palette.text.secondary }}>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleUserMenuOpen} sx={{ p: 0, ml: 1 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleUserMenuClose}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleUserMenuClose}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
