import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Color,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { title } from "process";

import "../style.css";

interface Subpage {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  theme_colour: string;
  subcontent: any;
}

export const Subpage = (Props: Subpage) => {
  const navigate = useNavigate();

  return (
    <Box className="subpage">
      <Box className="component">
        <Typography color={Props.theme_colour} className="title">
          {Props.title}
        </Typography>
        <Typography className="subtitle">{Props.subtitle}</Typography>
        <Button
                onClick={() => navigate(`/${Props.button_link}`)}
                sx={{ my: 2, background: (Props.theme_colour), color:"white", display: "block"}}
              >
          {Props.button_text}
        </Button>
      </Box>
      <Box className="component" sx={{background:(Props.theme_colour)}}>{Props.subcontent}</Box>
    </Box>
  );
};
