import { Grid } from "@mui/material";

function FooterContainer({ children }) {
  return (
    <Grid
      container
      width="100%"
      bgcolor="#1A1C20"
      left={0}
      bottom={0}
      right={0}
      justifyContent="space-between"
      alignItems="center"
      paddingX={10}
      paddingY={2}
    >
      {children}
    </Grid>
  );
}

export default FooterContainer;