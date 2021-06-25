import React from "react";
import LoginPageComponent from "./loginPage.component"

const LoginPage = () => {

    const initialValues = {
        email: "",
        password: "",
      };


    const formValues = [
        {
          inputType: "email",
          inputName: "email",
          inputMinLength: 12,
          inputMaxLength: 50,
          inputPlaceholder: "ej. hola@dominio.com",
          inputLabel: "Correo Electrónico",
        },
        {
          inputType: "password",
          inputName: "password",
          inputMinLength: 6,
          inputMaxLength: 12,
          inputPlaceholder: "******",
          inputLabel: "Contraseña",
        },
      ];


    return <LoginPageComponent  initialValues={initialValues} formValues={formValues} />;
  };
  
  export default LoginPage;

