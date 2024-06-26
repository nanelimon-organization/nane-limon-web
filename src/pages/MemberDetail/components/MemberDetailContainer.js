import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function MemberDetailContainer({ children }) {
  return (
    <Grid
      

      display="flex"
      margin={5}
      flexDirection="column"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}

export default MemberDetailContainer;
