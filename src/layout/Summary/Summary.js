import { Box, Grid, Typography } from "@mui/material";

function Summary() {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ margin: {xs: 3,md: 8}, padding: {xs: 2,md: 5},}}>
        <Box borderRadius={5}>
          <Typography
            variant="h5"
            sx={{
              fontSize: 28,
              color: "black",
              textAlign: "start",
              fontFamily: "roboto-bold"
            }}
          >
            Türkçe Doğal Dil İşleme Gönüllüleri
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontSize: {xs:12, md: 20}, textAlign: "justify",fontFamily: "roboto-regular" }}
          paddingTop={2}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many
        </Typography>
      </Box>
    </Grid>
  );
}

export default Summary;
