import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function LogoMenuContainer({ children }) {
  return (
    <Grid
      item
      xs={12}
      md={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
    >
      {children}
    </Grid>
  );
}

export default LogoMenuContainer;
