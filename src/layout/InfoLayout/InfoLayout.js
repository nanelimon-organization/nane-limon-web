import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function InfoLayoutRight({ title, description, src }) {
  return (
    <Grid
      container
      bgcolor="white"
      display="flex"
      justifyContent="space-evenly"
      padding={5}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
    >
      <Grid item marginY={5}>
        <Typography component={motion.h3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }} fontSize={32} marginBottom={2} fontFamily="roboto-bold">
          {title}
        </Typography>
        <Typography component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }} fontSize={24} fontFamily="roboto-regular" maxWidth={550}>
          {description}
        </Typography>
      </Grid>
      <Grid>
        <Box
          sx={{
            borderRadius: 2,
            borderColor: "#F2F2F2",
            height: { xs: 150, md: 350 },
            width: { xs: 300, md: 700 },
          }}
          component={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "just", stiffness: 100 }}
          variant="outlined"
          src={src}
        ></Box>
      </Grid>
    </Grid>
  );
}

export function InfoLayoutLeft({ title, description, src }) {
  return (
    <Grid
      container
      bgcolor="white"
      display="flex"
      justifyContent="space-evenly"
      padding={5}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
    >
      <Grid>
        <Box
          sx={{
            borderRadius: 2,
            borderColor: "#F2F2F2",
            height: { xs: 150, md: 350 },
            width: { xs: 300, md: 700 },
          }}
          variant="outlined"
          component={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          src={src}
        ></Box>
      </Grid>
      <Grid item marginY={5}>
        <Typography
          component={motion.h3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          fontSize={32}
          marginBottom={2}
          fontFamily="roboto-bold"
        >
          {title}
        </Typography>
        <Typography
          fontSize={24}
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          fontFamily="roboto-regular"
          maxWidth={550}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}
