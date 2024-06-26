import { Alert, Box, Divider, Grid, Snackbar } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Summary from "./components/Summary/Summary";
import { useLoaderData } from "react-router-dom";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { events } from "../../constants/events";
import {
  InfoLayoutLeft,
  InfoLayoutRight,
} from "../CommunityEvents/components/InfoLayout/InfoLayout";
import preloadImages from "../../utils/preloadImages";
import imagePaths from "../../assets/imagePaths";

import Projects from "./components/Projects/Projects";
import Medium from "./components/Medium/Medium";
import { useLoading } from "../../contexts/LoadingContext";

function HomePage({ refs, scrollToSection }) {
  const { showLoading, hideLoading } = useLoading();
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    preloadImages(imagePaths).then((images) => {
      setPreloadedImages(images);
      setVisible(true);
    });
  }, [showLoading, hideLoading]);

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
          <Banner visible={visible} preloadedImages={preloadedImages} />
        </div>
        
          <Box sx={{ paddingTop: "100vh" }}>
            <Grid justifyContent="center"  bgcolor="#ffffff"  container>
              <Summary />
            </Grid>
          </Box>

          <Divider sx={{bgcolor: "#111111"}} />

          <div ref={refs.teamRef}>
            <Team />
          </div>

          <Divider sx={{bgcolor: "#111111"}} />

          <Projects refs={refs} scrollToSection={scrollToSection} />

          <Divider sx={{bgcolor: "#111111"}} />

          <Box  bgcolor="#ffffff"  paddingX={10} ref={refs.eventsRef}>
            {events.map((event, index) => {
              if (index % 2 === 0) {
                return (
                  <InfoLayoutLeft
                    key={index}
                    title={event.title}
                    description={event.description}
                    src={event.src}
                  />
                );
              } else {
                return (
                  <InfoLayoutRight
                    key={index}
                    title={event.title}
                    description={event.description}
                    src={event.src}
                  />
                );
              }
            })}
          </Box>

          <Box bgcolor="#ffffff" ref={refs.contactRef} sx={{ paddingX: { xs: 0, md: 20 }, marginTop: 0, marginBottom: 0}}>
            <ContactForm handleClick={handleClick} />
          </Box>
    </>
  );
}

export default HomePage;
