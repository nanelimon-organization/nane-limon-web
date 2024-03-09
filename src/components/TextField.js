import { Grid, TextField } from "@mui/material";

function CustomTextField({ label, multiline, rows, maxRows,type,error,value,setFormValues,formValue}) {

  function inputHandler(event){
    setFormValues((prev)=>({...prev,[formValue]: event.target.value}))
  }
  return (
    <Grid item xs={6} paddingX={2} paddingY={2}>
      <TextField
        multiline={multiline}
        rows={rows}
        error={error === "" ? true : false}
        type={type}
        value={value}
        onChange={inputHandler}
        label={label}
        maxRows={maxRows}
        sx={{ width: "100%", borderRadius: 10 }}
        color="success"
        
        
      />
    </Grid>
  );
}

export default CustomTextField;
