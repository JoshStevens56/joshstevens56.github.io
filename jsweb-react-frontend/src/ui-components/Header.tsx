import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import logo from "../logo.svg";

import '../style.css';

const pages = ["About", "Portfolio", "Blog", "Contact"];

function Header() {
  const [header, setHeader] = React.useState<string | null>("Joshua Stevens");
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{background:'#EFEFEF', color: '#323F49', boxShadow:'none'}} className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button onClick={() => navigate("/")}>
            <img
              src={logo}
              className="logo"
              onClick={() => navigate("/")}
            ></img>
          </Button>
          <Typography fontWeight='500' fontSize='2vmin' textTransform='uppercase'>Joshua Stevens</Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { display: "flex", flexDirection: "row-reverse" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page}`)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
