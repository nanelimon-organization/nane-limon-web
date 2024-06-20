import { Alert, Box, Divider, Grid, Snackbar, Typography } from "@mui/material";

import Banner from "./components/Banner/Banner";
import Medium from "./components/Medium/Medium";
import Summary from "./components/Summary/Summary";
import { useLoaderData } from "react-router-dom";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useRef, useState } from "react";
import CardNew from "../ProjectsPage/components/Card/CardNew";
import { events } from "../../constants/events";
import { InfoLayoutLeft, InfoLayoutRight } from "../CommunityEvents/components/InfoLayout/InfoLayout";

function HomePage({refs}) {
  const posts = useLoaderData();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", margin: 2 }}
        >
          Mesajın başarıyla iletildi!
        </Alert>
      </Snackbar>

      <div ref={refs.homeRef}>
        <Banner />
      </div>

      <Box sx={{ paddingX: { xs: 0, md: 20 } }}>
        <Grid justifyContent="center" container>
          {/* <Medium posts={posts} /> */}
          <Summary />
        </Grid>
      </Box>

      <Divider />

      <Team />

      <Divider />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={refs.projectsRef}
        flexDirection="column"
        paddingY={5}
      >
        <Typography
          textAlign="center"
          component="div"
          sx={{ fontFamily: "roboto-bold", fontSize: 24 }}
        >
          PROJELERİMİZ
        </Typography>

        <Grid
          container
          justifyContent="center"
          display="flex"
          alignItems="center"
          md={10}
        >
          <CardNew />
          <CardNew />

          <CardNew />

          <CardNew />
          <CardNew />
          <CardNew />
        </Grid>
      </Box>
      <Divider />

      <div ref={refs.eventsRef}>
      {events.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <InfoLayoutLeft
              title={event.title}
              description={event.description}
              src={event.src}
            />
          );
        } else {
          return (
            <InfoLayoutRight
              title={event.title}
              description={event.description}
              src={event.src}
            />
          );
        }
      })}
      </div>

      <Box ref={refs.contactRef} sx={{ paddingX: { xs: 0, md: 20 } }}>
        <ContactForm handleClick={handleClick} />
      </Box>
    </>
  );
}

export default HomePage;

// export const homeLoader = async ({ request, params }) => {
//   try {
//     const response = await axios.get(
//       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/nane-limon"
//     );
//     for(let i = 0;i<response.data.items.length;i++){
//       response.data.items[i].title = response.data.items[i].title.replace("&amp;","&")
//     }
//     return await response.data.items.slice(0, 5);
//   } catch {
//     console.log("hata");
//   }
// };
