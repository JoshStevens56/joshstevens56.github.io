import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  ButtonProps,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

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
    color: theme.palette.getContrastText(Props.themecolor[500]),
    backgroundColor: Props.themecolor[500],
    "&:hover": {
      backgroundColor: Props.themecolor[500],
    },
  }));

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography color={Props.themecolor} variant="h2" >
          {Props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Props.subtitle}
        </Typography>
      </CardContent>
      {Props.buttonvisible && (
        <CardActions>
          (
          <ColorButton
            size="small"
            variant="contained"
            onClick={() => navigate(`/${Props.buttonLink}`)}
          >
            {Props.buttonText}
          </ColorButton>
          )
        </CardActions>
      )}
    </Card>
  );
};
