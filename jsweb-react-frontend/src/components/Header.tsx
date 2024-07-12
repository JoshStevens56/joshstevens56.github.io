import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import logo from '../assets/images/logo.svg'

import '../styling/root.css';

const pages = ["About", "Portfolio", "Blog", "Contact"];

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{background:'#EFEFEF', color: '#323F49', boxShadow:'none'}} className="header">
      <Container maxWidth={false} sx={{maxHeight: "8vh"}}>
        <Toolbar disableGutters sx={{maxHeight: "8vh"}}>
          <Button onClick={() => navigate("/")}>
            <img
              src={logo}
              className="logo"
              height="50vh"
              onClick={() => navigate("/")}
            ></img>
          </Button>
          <Typography textTransform='uppercase' overflow={'clip'}>Joshua Stevens</Typography>
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
                sx={{ textTransform:'capitalize',my: 2, color: "black", display: "block" }}
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
