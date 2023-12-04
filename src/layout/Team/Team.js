import { Grid } from "@mui/material";
import Member from "./Member";

function Team() {
  return (
    <Grid container width="100%" flexDirection="row" justifyContent="center" >
      <Grid
        item
        xs={0}
        md={12}
        display={{ xs: "none", md: "flex" }}
        
        alignItems="center"
        justifyContent="space-between"
      >
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </Grid>
    </Grid>
  );
}
export default Team;
