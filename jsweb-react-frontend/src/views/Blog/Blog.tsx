import { Typography } from "@mui/material";
import { Link as Route } from "react-router-dom";
import Link from "@mui/material/Link";
export const Blog = () => {
  return (
    <>
      <Typography variant="h1">Blog</Typography>
      <Route to="/">Home</Route>
      <Typography>
        V1 coming soon-ish ... {'\n'}
        In the meantime, please check out my current blog on Notion:   
        <a
          href="https://www.notion.so/joshsgaming/Josh-s-Gaming-98dbce53480341bb9fdb9d5a825d09cc" target="_blank"
        >
          Link
        </a>  
       
      </Typography>
    </>
  );
};

export default Blog;
