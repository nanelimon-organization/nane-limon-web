import { Card, Grid, Paper, Typography } from "@mui/material";

function FieldsPage() {
  return (
    <Grid>
      <Grid bgcolor="#9BABB8" marginTop={14} display="flex" justifyContent="space-evenly" padding={5} alignItems="center">
        <Grid marginY={5} >
            <Typography fontSize={32} marginBottom={2} fontFamily="opensans-bold">Distracted by the readable content of a page</Typography>
            <Typography fontSize={24} fontFamily="opensans-medium" maxWidth={550}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</Typography>
        </Grid>
        <Grid  >
            <Card sx={{borderRadius: 2, height: 350,width: 700}} variant="outlined">
                <Typography>buraya foto gelcek</Typography>
            </Card>
        </Grid>
      </Grid>
      <Grid bgcolor="#F8F6F4" display="flex" justifyContent="space-evenly" padding={5} alignItems="center">
        <Grid>
            <Card sx={{borderRadius: 2, height: 350,width: 700}} variant="outlined">
                <Typography>buraya foto gelcek</Typography>
            </Card>
        </Grid>
        <Grid marginY={5} >
            <Typography fontSize={32} marginBottom={2} fontFamily="opensans-bold">Distracted by the readable content of a page</Typography>
            <Typography fontSize={24} fontFamily="opensans-medium" maxWidth={550}>Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</Typography>
        </Grid>
      </Grid>
      <Grid bgcolor="#9BABB8" display="flex" justifyContent="space-evenly" padding={5} alignItems="center">
        <Grid marginY={5} >
            <Typography fontSize={32} marginBottom={2} fontFamily="opensans-bold">Distracted by the readable content of a page</Typography>
            <Typography fontSize={24} fontFamily="opensans-medium" maxWidth={550}>Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</Typography>
        </Grid>
        <Grid  >
            <Card sx={{borderRadius: 2, height: 350,width: 700}} variant="outlined">
                <Typography>buraya foto gelcek</Typography>
            </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FieldsPage;
