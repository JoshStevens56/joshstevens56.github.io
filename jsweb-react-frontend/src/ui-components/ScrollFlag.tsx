import * as React from "react";
import SquareTwoToneIcon from "@mui/icons-material/SquareTwoTone";
import logo from "../logo.svg";
import { Box } from "@mui/material";

import '../style.css'

export default function ScrollFlag() {
  return (
    <Box className="img">
      <Box className="icons">
        <SquareTwoToneIcon />
        <SquareTwoToneIcon />
        <SquareTwoToneIcon />
        <SquareTwoToneIcon />
      </Box>
    </Box>
  );
}
