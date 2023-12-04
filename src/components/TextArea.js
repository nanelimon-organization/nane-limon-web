import { Grid, TextField } from "@mui/material";

function CustomTextArea({ label, rows, maxRows }) {
  return (
    <Grid item xs={12} paddingX={2} paddingY={2}>
      <TextField
        multiline
        rows={rows}
        color="success"
        maxRows={maxRows}
        label={label}
        sx={{ width: "100%" }}
      />
    </Grid>
  );
}

export default CustomTextArea;
