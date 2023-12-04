import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import CustomTextArea from "../../components/TextArea";
import CustomTextField from "../../components/TextField";

function ContactForm() {
  return (
    <Grid container marginY={5} padding={5}>
      <Grid
        item
        xs={12}
        display="flex"
        marginX={{xs: 0,md:30}}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }} textAlign="center">
          BİZE ULAŞIN
        </Typography>

        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginY={2}
        >
          <CustomTextField label="İsim Soyisim" />
          <CustomTextField label="E-mail Adresiniz" />
          <CustomTextField label="Telefon Numaranız" />
          <CustomTextField label="Konu" />
          <CustomTextArea label="Mesaj" rows={6} maxRows={10} />
        </Grid>
        <Grid item xs={12}>
          <CustomButton title="Gönder" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
