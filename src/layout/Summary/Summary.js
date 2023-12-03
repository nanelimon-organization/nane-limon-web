import { Box, Grid, Typography } from "@mui/material";

function Summary() {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ margin: 8, padding: 4 }}>
        <Box bgcolor="green" padding={1} borderRadius={5} boxShadow={10}>
          <Typography
            variant="h5"
            sx={{
              fontSize: 30,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            Türkçe Doğal Dil İşleme Gönüllüleri
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 20, fontWeight: "400", textAlign: "justify" }}
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
