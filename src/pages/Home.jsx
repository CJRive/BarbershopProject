import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CashOnly from "../assets/CashOnly.png";
import CashOnlyBlack from "../assets/LAB.png";
import InstagramWidget from "../components/InstagramWidget";

const Home = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${isDarkMode ? CashOnly : CashOnlyBlack})`,
          backgroundSize: `${isDarkMode ? "auto 85vh" : "auto 85vh"}`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh", // Ensures full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to BarberShop
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Your one-stop solution for booking barber appointments online.
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/services">
                View Services
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" component={Link} to="/booking">
                Book an Appointment
              </Button>
            </Grid>
          </Grid>
        </Container>

        {/* Instagram Section */}
        <Container
          maxWidth="md"
          sx={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              border: "1px solid #ccc",
              borderRadius: "4px",
              p: 2,
              mt: 2,
            }}
          >
            {/* Example of embedding Instagram feed */}
            <InstagramWidget />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
