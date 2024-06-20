import { Grid, TextField } from "@mui/material";

function CustomTextArea({ label, rows, maxRows, error,name,value,setFormValues,formValue,onChange}) {
 
  return (
    <Grid item xs={12} paddingX={2} paddingY={2}>
      <TextField
        multiline
        rows={rows}
        color="success"
        maxRows={maxRows}
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        sx={{ width: "100%" }}
        error={error}
      />
    </Grid>
  );
}

export default CustomTextArea;
