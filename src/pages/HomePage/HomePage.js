import { Box, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import Banner from "../../layout/Banner/Banner";
import axios from "axios";
import Medium from "../../layout/Medium/Medium";
import Summary from "../../layout/Summary/Summary";
function HomePage() {
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tarikkaan1koc"
      )
      .then((res) => {
        console.log(res.data.items);
        setPosts(res.data.items.slice(0,5));
      })
      .catch((error) => {
        console.error("Hata", error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <Box>
        <Banner />
        <Grid container sx={{ paddingX: 20 }}>
          <Medium posts={posts} />
          <Summary />
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
