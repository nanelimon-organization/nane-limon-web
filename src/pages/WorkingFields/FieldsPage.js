import { Card, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

function FieldsPage() {

  useEffect(() => {
    window.scrollTo({top: 0,behavior: "smooth"})
  }, [])

  return (
    <>
      <Grid
      container
        bgcolor="white"
        display="flex"
        justifyContent="space-evenly"
        padding={5}
        flexDirection={{xs: "column",md: "row"}}
        alignItems="center"
      >
        <Grid item marginY={5}>
          <Typography fontSize={32} marginBottom={2} fontFamily="roboto-bold">
            Distracted by the readable content of a page
          </Typography>
          <Typography fontSize={24} fontFamily="roboto-regular" maxWidth={550}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </Typography>
        </Grid>
        <Grid>
          <Card
            sx={{ borderRadius: 2, height: {xs: 150,md: 350}, width: {xs: 300,md: 700} }}
            variant="outlined"
          >
            <Typography>buraya foto gelcek</Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid
      container
        bgcolor="white"
        display="flex"
        justifyContent="space-evenly"
        padding={5}
        alignItems="center"
      >
        <Grid>
          <Card
            sx={{ borderRadius: 2, height: {xs: 150,md: 350}, width: {xs: 300,md: 700} }}
            variant="outlined"
          >
            <Typography>buraya foto gelcek</Typography>
          </Card>
        </Grid>
        <Grid marginY={5}>
          <Typography fontSize={32} marginBottom={2} fontFamily="roboto-bold">
            Distracted by the readable content of a page
          </Typography>
          <Typography fontSize={24} fontFamily="roboto-regular" maxWidth={550}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </Typography>
        </Grid>
      </Grid>
      <Grid
      container
        bgcolor="white"
        display="flex"
        justifyContent="space-evenly"
        padding={5}
        alignItems="center"
      >
        <Grid marginY={5}>
          <Typography fontSize={32} marginBottom={2} fontFamily="roboto-bold">
            Distracted by the readable content of a page
          </Typography>
          <Typography fontSize={24} fontFamily="roboto-regular" maxWidth={550}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </Typography>
        </Grid>
        <Grid>
          <Card
            sx={{ borderRadius: 2,height: {xs: 150,md: 350}, width: {xs: 300,md: 700} }}
            variant="outlined"
          >
            <Typography>buraya foto gelcek</Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default FieldsPage;
