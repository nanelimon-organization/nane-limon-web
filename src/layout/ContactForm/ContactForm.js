import { Grid, Input, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import CustomTextArea from "../../components/TextArea";
import CustomTextField from "../../components/TextField";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import ReactInputMask from "react-input-mask";
function ContactForm({ handleClick }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
  });
  const form = useRef();


 
  function inputHandler(event){
    setFormValues(prev=>({...prev,[event.target.name]: event.target.value}))
  } 
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [capVal, setCapVal] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formValues.name !== "" &&
      formValues.email !== "" &&
      formValues.phone !== "" &&
      formValues.title !== "" &&
      formValues.description !== "" &&
      formValues.email.includes("@")
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
            onChange={inputHandler}
            name="name"
            error={!isFirstRender && formValues.name === ""}
          />
          <CustomTextField
            formValue="email"
            value={formValues.email}
            label="E-mail Adresiniz"
            type="email"
            onChange={inputHandler}
            name="email"
            error={
              !isFirstRender &&
              (formValues.email === "" || !formValues.email.includes("@"))
            }
          />
          <ReactInputMask mask="0999 999 9999" value={formValues.phone} onChange={(e)=>inputHandler(e)} maskChar={null}>
          {()=><CustomTextField
            formValue="phone"
            label="Telefon Numaranız"
            name="phone"
            type="tel"
            error={!isFirstRender && formValues.phone === ""}
          />}
          </ReactInputMask>
          <CustomTextField
            formValue="title"
            value={formValues.title}
            label="Konu"
            name="title"
            onChange={inputHandler}
            error={!isFirstRender && formValues.title === ""}
          />
          <CustomTextArea
            formValue="description"
            value={formValues.description}
            label="Mesaj"
            name="description"
            rows={6}
            maxRows={10}
            onChange={inputHandler}
            error={!isFirstRender && formValues.description === ""}
          />
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={(val) => setCapVal(val)}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            title="Gönder"
            disabled={!capVal}
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
