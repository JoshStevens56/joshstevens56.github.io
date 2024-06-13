import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Card,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const PortfolioSummary = () => {
  return (
    <>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Skilled in:
          </Typography>
          <Typography variant="h5" component="div">
            React{bull}c#{bull}Azure{bull}Project Lead
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            Experienced in designing, developing, delivering, and supporting
            solutions
            <p />
            Microsoft certified
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};
