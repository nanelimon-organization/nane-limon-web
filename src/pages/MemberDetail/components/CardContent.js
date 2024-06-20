import { Box, Card, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
function CardDetail({ location }) {
  return (
    <>
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
        <Typography textAlign="center" fontFamily="roboto-medium" fontSize={16}>
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
          marginX={{ xs: 0, md: 10 }}
          textAlign="justify"
          fontFamily="roboto-regular"
          padding={{ xs: 2, md: 0 }}
          fontSize={{ xs: 14, md: 20 }}
        >
          {location.state.description}
        </Typography>
      </Grid>
      <Grid display="flex" marginY={2}></Grid>
    </>
  );
}

export default CardDetail;
