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
  buttonText: string;
  buttonLink: string;
  themecolor: string;
  buttonvisible: boolean;
}

export const HomeTitleCard = (Props: CardContent) => {
  const navigate = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(Props.themecolor),
    backgroundColor: Props.themecolor,
    "&:hover": {
      backgroundColor: Props.themecolor,
    },
  }));

  return (
    <Box sx={{ height: "100%", alignContent:"center" }}>
      <CardContent>
        <Typography color={Props.themecolor} variant="h2">
          {Props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Props.subtitle}
        </Typography>
      </CardContent>
      {Props.buttonvisible && (
        <CardActions>
          <ColorButton
            size="small"
            variant="contained"
            onClick={() => navigate(`/${Props.buttonLink}`)}
          >
            {Props.buttonText}
          </ColorButton>
        </CardActions>
      )}
    </Box>
  );
};
