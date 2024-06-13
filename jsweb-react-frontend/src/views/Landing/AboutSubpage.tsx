import { CardContent, Box, CardMedia, Grid, Typography } from "@mui/material";

import CodeImage from '../../assets/images/CodeCustom.svg'
import CodeImage2 from '../../assets/images/CodeCustom200.png'

interface ImageCard{
  image: any,
  text: string 
}

export const ImageCard = (Props:ImageCard) => {
  return (
    <> <Box sx={{padding:'4%'}}>
        <CardMedia image={Props.image} sx={{height:'undefined', width:'100%', aspectRatio:1}}></CardMedia>
        <CardContent><Typography >{Props.text}</Typography></CardContent>
        </Box>
    </>
  );
};


export const AboutSubpageContent = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <ImageCard image={CodeImage} text='Software Engineer'/>
        </Grid>
        <Grid item xs={6}>
          <ImageCard image={CodeImage2} text='Full-stack developer'/>
        </Grid>
        <Grid item xs={6}>
          <ImageCard image={CodeImage} text = 'game enthusiast'/>
        </Grid>
        <Grid item xs={6}>
          <ImageCard image={CodeImage} text = 'based in australia'/>
        </Grid>
      </Grid>
    </>
  );
};
