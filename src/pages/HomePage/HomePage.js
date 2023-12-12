import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import Banner from "../../layout/Banner/Banner";
import axios from "axios";
import Medium from "../../layout/Medium/Medium";
import Summary from "../../layout/Summary/Summary";
import { useLoaderData } from "react-router-dom";
import Team from "../../layout/Team/Team";
import CustomButton from "../../components/Button";
import CustomTextField from "../../components/TextField";
import CustomTextArea from "../../components/TextArea";
import ContactForm from "../../layout/ContactForm/ContactForm";
import Footer from "../../layout/Footer/Footer";
function HomePage() {
  const posts = useLoaderData();

  return (
    <>
      <Banner />
      <Box sx={{ paddingX: { xs: 0, md: 20 } }}>
        {/* medium ve özet kısmı */}

        <Grid container>
          <Medium posts={posts} />
          <Summary />
        </Grid>
        {/* medium ve özet kısmı */}
      </Box>
      <Divider />
      <Team />
      <Divider />
      <Box sx={{ paddingX: { xs: 0, md: 20 } }}>
        <ContactForm />
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
