import {
  Avatar,
  Box,
  Breadcrumbs,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
function MemberDetail() {
  let location = useLocation();
  //projeler kısmı çalışma alanları gibi olcak. fontlar değişcek hepsinde, fontların rengi olarak da 2222 11111 gibi ibşi olacak. 
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <NavLink
          style={{ textDecoration: "none" }}
          underline="hover"
          color="inherit"
          href="/"
          to="/"
        >
          <Typography fontFamily="opensans-bold" color="text.primary">
            Anasayfa
          </Typography>
        </NavLink>
        <Typography fontFamily="opensans-medium" color="text.primary">
          {location.state.name}
        </Typography>
      </Breadcrumbs>
      <Card elevation={24} marginTop={2} sx={{display: "flex", flexDirection: {xs: "column", md: "row"},padding: 10,margin: 10}}>
        <Grid
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Card sx={{ height: 250, width: 250 }}>
            <Box
              component="img"
              width="250px"
              height="250px"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            />
          </Card>
          <Typography
            textAlign="center"
            marginTop={2}
            fontFamily="opensans-bold"
            fontSize={24}
          >
            {location.state.name}
          </Typography>
          <Typography
            textAlign="center"
            fontFamily="opensans-medium"
            fontSize={16}
          >
            {location.state.title}
          </Typography>
          <Grid marginTop={1} display="flex">
            <GitHubIcon sx={{ width: 40, height: 40 }} />
            <LinkedInIcon sx={{ width: 40, height: 40, marginX: 3 }} />
            <EmailIcon sx={{ width: 40, height: 40 }} />
          </Grid>
        </Grid>
        <Grid>
          <Typography
            maxWidth={750}
            marginX={{xs: 0,md: 10}}
            textAlign="center"
            fontFamily="opensans-medium"
            padding={{ xs: 2, md: 0 }}
            fontSize={{ xs: 14, md: 20 }}
          >
            {location.state.description}
          </Typography>
        </Grid>
        <Grid display="flex" marginY={2}></Grid>
      </Card>
    </Grid>
  );
}

export default MemberDetail;
