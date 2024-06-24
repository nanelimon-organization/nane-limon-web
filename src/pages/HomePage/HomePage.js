import {
  Alert,
  Box,
  Divider,
  Grid,
  Snackbar,
} from "@mui/material";
import Banner from "./components/Banner/Banner";
import Summary from "./components/Summary/Summary";
import { useLoaderData } from "react-router-dom";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";
import { events } from "../../constants/events";
import {
  InfoLayoutLeft,
  InfoLayoutRight,
} from "../CommunityEvents/components/InfoLayout/InfoLayout";

import Projects from "./components/Projects/Projects";
import Medium from "./components/Medium/Medium";
function HomePage({ refs, scrollToSection }) {
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
          <Summary />
        </Grid>
      </Box>

      <Divider />

      <div ref={refs.teamRef}>
        <Team />
      </div>

      <Divider />

      <Projects refs={refs} scrollToSection={scrollToSection} />

      <Divider />

      <div ref={refs.eventsRef}>
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
      </div>

      <Box ref={refs.contactRef} sx={{ paddingX: { xs: 0, md: 20 } }}>
        <ContactForm handleClick={handleClick} />
      </Box>
    </>
  );
}

export default HomePage;
