import {
  Avatar,
  Box,
  Breadcrumbs,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
function MemberDetail() {
  let location = useLocation();
  return (
    <Grid
      marginTop={15}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <NavLink style={{textDecoration: "none"}} underline="hover" color="inherit" href="/">
        <Typography fontFamily="opensans-bold"  color="text.primary">Ekibimiz</Typography>
        </NavLink>
        <Typography fontFamily="opensans-medium" color="text.primary">{location.state.name}</Typography>
      </Breadcrumbs>
      <Grid marginTop={2}>
        <Card sx={{ height: 250, width: 250 }}>
          <Box
            component="img"
            width="250px"
            height="250px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          />
        </Card>
      </Grid>
      <Grid>
        <Typography textAlign="center" marginTop={2} fontFamily="opensans-bold" fontSize={24}>
          {location.state.name}
        </Typography>
        <Typography textAlign="center" fontFamily="opensans-medium" fontSize={16}>
          {location.state.title}
        </Typography>
      </Grid>
      <Grid>
        <Typography maxWidth={750} marginTop={2} textAlign="center" fontFamily="opensans-medium" padding={{xs:2,md:0}} fontSize={{xs: 14,md: 20}}>
          {location.state.description}
        </Typography>
      </Grid>
      <Grid display="flex" marginY={2}>
        <GitHubIcon sx={{width: 40,height: 40}} />
        <LinkedInIcon sx={{width: 40,height: 40,marginX:3}} />
        <EmailIcon sx={{width: 40,height: 40}}/>
      </Grid>
    </Grid>
  );
}

export default MemberDetail;
