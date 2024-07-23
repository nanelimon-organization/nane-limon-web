import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const {t} = useTranslation()
  return (
    <Grid item xs={12} md={4}>
      <Box display="flex" flexDirection="column">
        <Typography fontSize={12} color="white" fontFamily="roboto-medium">
          {t("footer.title")}
        </Typography>
        <Divider sx={{ marginY: 1, bgcolor: "white" }} />

        <Typography
          color="white"
          fontFamily="roboto-medium"
          textAlign="justify"
          fontSize={14}
        >
          {t("footer.description")}
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutUs;
