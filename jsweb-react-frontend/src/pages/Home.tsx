import { Box, Typography } from "@mui/material";
import '../style.css'

/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *
 *
 * ------------------------------------ */

export default function Home() {
  return (
    <>
      <Box className='home'>
        <Box className='title'>
          <Typography className='title'>Hello</Typography>
        </Box>
        <Box>
          <Typography>Hello</Typography>
        </Box>
      </Box>
    </>
  );
}
