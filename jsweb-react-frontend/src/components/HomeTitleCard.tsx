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
    <Box sx={{ height: "100%", alignContent:"center" }}>
      <CardContent>
        <Typography color={Props.colour} variant="h2">
          {Props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Props.subtitle}
        </Typography>
      </CardContent>
      {Props.enablebutton && (
        <CardActions>
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
