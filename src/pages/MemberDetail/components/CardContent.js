import { Box, Button, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: 20,
    fontFamily: "roboto-medium",
    marginRight: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function CardDetail({ location }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Card sx={{ height: 250, width: 250, borderRadius: 5 }}>
          <Box
            component="img"
            width="250px"
            height="250px"
            src={location.state.src}
          />
        </Card>
        <Typography
          textAlign="center"
          marginTop={2}
          fontFamily="roboto-bold"
          fontSize={24}
        >
          {location.state.name}
        </Typography>
        <Typography textAlign="center" fontFamily="roboto-medium" fontSize={16}>
          {location.state.title}
        </Typography>
        <Typography textAlign="center" fontFamily="roboto-medium" fontSize={16}>
          {location.state.email}
        </Typography>
        <Grid marginTop={1} display="flex">
          <Link target="_blank" to={location.state.github}>
            <Button
              sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
              disableFocusRipple
              disableRipple
            >
              <GitHubIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
          <Link target="_blank" to={location.state.linkedin}>
            <Button
              sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
              disableFocusRipple
              disableRipple
            >
              <LinkedInIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
          <Link
            onClick={() => (window.location = `mailto:${location.state.email}`)}
          >
            <Button
              sx={{ "&:hover": { backgroundColor: "#ffffff" } }}
              disableFocusRipple
              disableRipple
            >
              <EmailIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid marginX={{ xs: 0, md: 10 }}>
        <Typography
          maxWidth={750}
          textAlign="justify"
          fontFamily="roboto-regular"
          padding={{ xs: 2, md: 0 }}
          fontSize={{ xs: 14, md: 16 }}
        >
          {location.state.description}
        </Typography>

        {/* <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Kariyer" />
          <StyledTab label="Eğitim" />
        </StyledTabs> */}
      </Grid>
    </>
  );
}

export default CardDetail;
