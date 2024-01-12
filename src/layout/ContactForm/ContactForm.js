import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import CustomTextArea from "../../components/TextArea";
import CustomTextField from "../../components/TextField";
import { useState } from "react";

function ContactForm() {

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
          <CustomTextField value={formValues.name} label="İsim Soyisim" setFormValues={setFormValues}/>
          <CustomTextField value={formValues.email} label="E-mail Adresiniz" type="email" setFormValues={setFormValues} />
          <CustomTextField value={formValues.phone} label="Telefon Numaranız" type="tel" setFormValues={setFormValues} />
          <CustomTextField value={formValues.title} label="Konu" setFormValues={setFormValues} />
          <CustomTextArea value={formValues.description} label="Mesaj" rows={6} maxRows={10} setFormValues={setFormValues} />
        </Grid>
        <Grid item xs={12}>
          <CustomButton title="Gönder" border={1} paddingX={5} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
