import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import CustomTextArea from "../../components/TextArea";
import CustomTextField from "../../components/TextField";
import { useState } from "react";

function ContactForm({handleClick}) {

  const [formValues,setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: ""
  })


  

  return (
    <Grid container marginY={5} padding={5}>
      <Grid
        item
        xs={12}
        display="flex"
        marginX={{ xs: 0, md: 30 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "roboto-bold" }}
          textAlign="center"
        >
          BİZE ULAŞIN
        </Typography>

        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginY={2}
        >
          <CustomTextField formValue="name" value={formValues.name} label="İsim Soyisim" setFormValues={setFormValues}/>
          <CustomTextField formValue="email" value={formValues.email} label="E-mail Adresiniz" type="email" setFormValues={setFormValues} />
          <CustomTextField formValue="phone" value={formValues.phone} label="Telefon Numaranız" type="tel" setFormValues={setFormValues} />
          <CustomTextField formValue="title" value={formValues.title} label="Konu" setFormValues={setFormValues} />
          <CustomTextArea formValue="description" value={formValues.description} label="Mesaj" rows={6} maxRows={10} setFormValues={setFormValues} />
        </Grid>
        <Grid item xs={12}>
          <CustomButton title="Gönder" border={1} paddingX={5} onClick={()=>{handleClick()}} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
