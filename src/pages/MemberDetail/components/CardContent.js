import { Box, Button, Card, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
function CardDetail({ location }) {
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
        <Typography
          textAlign="center"
          fontFamily="roboto-medium"
          fontSize={16}
        >
          {location.state.email}
        </Typography>
        <Grid marginTop={1} display="flex">
          <Link
            target="_blank"
            to={location.state.github}
          
          >
            <Button sx={{"&:hover":{backgroundColor: "#ffffff"}}} disableFocusRipple disableRipple>
              <GitHubIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
          <Link
            target="_blank"
            to={location.state.linkedin}
          >
            <Button sx={{"&:hover":{backgroundColor: "#ffffff"}}} disableFocusRipple disableRipple>
              <LinkedInIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
          <Link
            onClick={() => (window.location = `mailto:${location.state.email}`)}
          >
            <Button sx={{"&:hover":{backgroundColor: "#ffffff"}}} disableFocusRipple disableRipple>
              <EmailIcon sx={{ width: 40, height: 40, color: "#111111" }} />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          maxWidth={750}
          marginX={{ xs: 0, md: 10 }}
          textAlign="justify"
          fontFamily="roboto-regular"
          padding={{ xs: 2, md: 0 }}
          fontSize={{ xs: 14, md:16 }}
        >
          {location.state.description}
        </Typography>
      </Grid>
      <Grid display="flex" marginY={2}></Grid>
      
    </>
  );
}

export default CardDetail;
