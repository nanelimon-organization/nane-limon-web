import {
  Box,
  Breadcrumbs,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink, Navigate, useLocation, useParams } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import {members} from "../../constants/constants"
const validMembers = ["tarik-kaan-koc", "seyma-sarigil","eray-buyukkanat","murat-koklu","elif-sarigil","erdinc-dal"];

function MemberDetail() {

  const { memberDetail } = useParams();

  
  useState(() => {
    window.scrollTo({top: 0,behavior: "smooth"})
  }, [])
  let location = useLocation();
 // Check if memberDetail is valid
 if (!validMembers.includes(memberDetail)) {
  return <Navigate to="/error" />;
}

if(location.state == null  && validMembers.includes(memberDetail) ){
  const member = members.find((member)=>member.slug === memberDetail )
  location.state = member
}




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
          <Typography fontFamily="roboto-bold" color="text.primary">
            Anasayfa
          </Typography>
        </NavLink>
        <Typography fontFamily="roboto-medium" color="text.primary">
          {location.state.name}
        </Typography>
      </Breadcrumbs>
      <Card  sx={{display: "flex", width: "60%", flexDirection: {xs: "column", md: "row"},padding: 5,margin: 5}}>
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
          <Typography
            textAlign="center"
            fontFamily="roboto-medium"
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
            textAlign="justify"
            fontFamily="roboto-regular"
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
