import { Grid, TextField } from "@mui/material";

function CustomTextField({ label, multiline, rows, maxRows,type,error,value,name,InputProps,onChange,component}) {

 
  return (
    <Grid item xs={6} paddingX={2} paddingY={2}>
      <TextField
        size="small"
        component={component}
        multiline={multiline}
        rows={rows} 
        InputProps={InputProps}
        error={error}
        type={type}
        name={name}
        value={value}
        onChange={(e)=>onChange(e)}
        label={label}
        maxRows={maxRows}
        sx={{ width: "100%", borderRadius: 10 }}
        color="success"
        
        
      />
    </Grid>
  );
}

export default CustomTextField;
