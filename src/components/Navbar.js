import { Box, Button, Container, Grid, withStyles } from "@mui/material";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <Grid
      container
      width="100%"
      flexDirection="row"
      bgcolor="white"
      sx={{ borderBottom: 1, borderBottomColor: "green" }}
      paddingX={16}
      paddingY={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md={2}>
        <Box
          component="img"
          src="https://avatars.githubusercontent.com/u/109470900?s=200&v=4"
          sx={{ width: 64, height: 64 }}
        />
      </Grid>

      <Grid
        item
        xs={0}
        md={10}
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
      >
        <Grid component={motion.div} whileHover="animate">
          <Button component={motion.div} disableRipple sx={useStyle.button}>
            Çalışma Alanlarımız
          </Button>
          <Grid
            component={motion.div}
            variants={buttonAnimation}
            initial={buttonAnimation.initial}
            exit={buttonAnimation.endAnimation}
          ></Grid>
        </Grid>
        <Grid component={motion.div} whileHover="animate">
          <Button component={motion.div} disableRipple sx={useStyle.button}>
            Projeler
          </Button>
          <Grid
            component={motion.div}
            variants={buttonAnimation}
            initial={buttonAnimation.initial}
          ></Grid>
        </Grid>
        <Grid component={motion.div} whileHover="animate">
          <Button component={motion.div} disableRipple sx={useStyle.button}>
            Sunumlar
          </Button>
          <Grid
            component={motion.div}
            variants={buttonAnimation}
            initial={buttonAnimation.initial}
          ></Grid>
        </Grid>
        <Grid component={motion.div} whileHover="animate">
          <Button component={motion.div} disableRipple sx={useStyle.button}>
            Hakkımızda
          </Button>
          <Grid
            component={motion.div}
            variants={buttonAnimation}
            initial={buttonAnimation.initial}
          ></Grid>
        </Grid>
        <Grid component={motion.div} whileHover="animate">
          <Button component={motion.div} disableRipple sx={useStyle.button}>
            Community Etkinlikleri
          </Button>
          <Grid
            component={motion.div}
            variants={buttonAnimation}
            initial={buttonAnimation.initial}
          ></Grid>
        </Grid>
        <Button disableRipple sx={useStyle.donateButton}>
          Bize Destek Olun!
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;

const buttonAnimation = {
  initial: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: "solid",
    borderBottomColor: "green",
    width: "0%",
  },
  animate: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: "solid",
    width: "100%",
    borderBottomColor: "green",

    transition: { duration: 0.5 },
  },
};

const useStyle = {
  button: {
    color: "green",
    "&:hover": {
      boxShadow: "none !important",
      backgroundColor: "white",
    },
    "&:active": {
      boxShadow: "none !important",
      backgroundColor: "white",
    },
  },
  donateButton: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 2,
    "&:hover": {
      color: "white",
      backgroundColor: "green",
      borderRadius: 2,
    },
  },
};
