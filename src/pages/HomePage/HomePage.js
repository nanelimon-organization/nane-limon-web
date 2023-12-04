import { Box, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import Banner from "../../layout/Banner/Banner";
import axios from "axios";
import Medium from "../../layout/Medium/Medium";
import Summary from "../../layout/Summary/Summary";
import { useLoaderData } from "react-router-dom";
function HomePage() {
  const posts = useLoaderData();

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

export const homeLoader = async ({ request, params }) => {
  try {
    const response = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tarikkaan1koc"
    );
    return await response.data.items.slice(0, 5);
  } catch {
    console.log("hata");
  }
};
