import { Grid, Input, Typography } from "@mui/material";
import CustomButton from "./components/Button";
import CustomTextArea from "./components/TextArea";
import CustomTextField from "./components/TextField";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
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
    const { name, value } = event.target;
    console.log(name)
    console.log(value)
    setFormValues({ ...formValues, [name]: value });
   
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
      formValues.email.includes("@") &&
      formValues.phone.length === 14
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
      clear()
    } else {
      setIsFirstRender(false);
    }
  };
  function clear(){
    setFormValues({
      name: "",
      email: "",
      phone: "",
      title: "",
      description: "",
    });
  }


  const [error, setError] = useState(false);

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');

    if (digits.length > 11) {
      return formValues.phone;
    }

    if (!digits.startsWith('0')) {
      return '0' + digits.slice(0, 10);
    }

    const match = digits.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      return [match[1], match[2], match[3], match[4]].filter(Boolean).join(' ').trim();
    }
    return digits;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormValues((prev)=>({...prev,phone: formattedValue}));
    console.log(value)
    const phonePattern = /^0\d{3} \d{3} \d{4}$/;
    if (value.length < 14) {
      if (phonePattern.test(formattedValue)) {
        setError(false); 
      } else {
        setError(true);
      }
    } else {
      
      setError(false);
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
          
      
      <CustomTextField
        type="tel"
        id="phone"
        name="phone"
        label="Telefon Numarası"
        
        value={formValues.phone}
        onChange={handleChange}
        error={
          !isFirstRender &&
          (formValues.phone === "" || error || formValues.phone.length < 11)
        }
      />
          
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
