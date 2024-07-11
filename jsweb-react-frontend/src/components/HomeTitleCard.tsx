import {
  Typography,
  Button,
  Box,
  CardContent,
  CardActions,
  ButtonProps,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardContent {
  title: string;
  subtitle: string;
  buttontext: string;
  buttonlink: string;
  colour: string;
  enablebutton: boolean;
}

export const HomeTitleCard = (Props: CardContent) => {
  const navigate = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(Props.colour),
    backgroundColor: Props.colour,
    "&:hover": {
      backgroundColor: Props.colour,
      
    },
  }));

  return (
    <Box className="HomeTitleCard"sx={{ height: "100%", alignContent:"center" }}>
      <CardContent>
        <Typography color={Props.colour} variant="h1">
          {Props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="subtitle1">
          {Props.subtitle}
        </Typography>
      </CardContent>
      {Props.enablebutton && (
        <CardActions sx={{paddingLeft:"2vw"}}>
          <ColorButton
            size="small"
            variant="contained"
            onClick={() => navigate(`/${Props.buttonlink}`)}
          >
            {Props.buttontext}
          </ColorButton>
        </CardActions>
      )}
    </Box>
  );
};
