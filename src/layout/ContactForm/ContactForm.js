import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import CustomTextArea from "../../components/TextArea";
import CustomTextField from "../../components/TextField";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ handleClick }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
  });
  const form = useRef();

  const [isFirstRender, setIsFirstRender] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formValues.name !== "" &&
      formValues.email !== "" &&
      formValues.phone !== "" &&
      formValues.title !== "" &&
      formValues.description !== ""
    ) {
      setIsFirstRender(true);
      emailjs
        .sendForm("service_ww5k7a8", "template_vgt3b9f", form.current, {
          publicKey: "qhPRcGpm-QSfxXwEA",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      handleClick();
      setFormValues({
        name: "",
        email: "",
        phone: "",
        title: "",
        description: "",
      });
    } else {
      setIsFirstRender(false);
    }
  };

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
          component="form"
          onSubmit={sendEmail}
          ref={form}
        >
          <CustomTextField
            formValue="name"
            value={formValues.name}
            label="İsim Soyisim"
            setFormValues={setFormValues}
            name="user_name"
            error={!isFirstRender && formValues.name === ""}
          />
          <CustomTextField
            formValue="email"
            value={formValues.email}
            label="E-mail Adresiniz"
            type="email"
            setFormValues={setFormValues}
            name="user_email"
            error={!isFirstRender && formValues.email === ""}
          />
          <CustomTextField
            formValue="phone"
            value={formValues.phone}
            label="Telefon Numaranız"
            type="tel"
            setFormValues={setFormValues}
            name="user_phone"
            error={!isFirstRender && formValues.phone === ""}
          />
          <CustomTextField
            formValue="title"
            value={formValues.title}
            label="Konu"
            name="title"
            setFormValues={setFormValues}
            error={!isFirstRender && formValues.title === ""}
          />
          <CustomTextArea
            formValue="description"
            value={formValues.description}
            label="Mesaj"
            name="message"
            rows={6}
            maxRows={10}
            setFormValues={setFormValues}
            error={!isFirstRender && formValues.description === ""}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            title="Gönder"
            border={1}
            paddingX={5}
            onClick={sendEmail}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
