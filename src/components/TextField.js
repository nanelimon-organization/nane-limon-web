import { Grid, TextField } from "@mui/material";

function CustomTextField({ label, multiline, rows, maxRows}) {
  return (
    <Grid item xs={6} paddingX={2} paddingY={2}>
      <TextField
        multiline={multiline}
        rows={rows}
        label={label}
        maxRows={maxRows}
        sx={{ width: "100%", borderRadius: 10 }}
        color="success"
      />
    </Grid>
  );
}

export default CustomTextField;
