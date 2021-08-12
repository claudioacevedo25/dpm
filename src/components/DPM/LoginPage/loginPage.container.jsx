import React from "react";
import { login as loginService } from "../../../api/authService";
import LoginPageComponent from "./loginPage.component";

const LoginPage = () => {
  const formOnSubmit = async (values) => {
    try {
      const data = await loginService(values);
      sessionStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("dpm", JSON.stringify(data.instances["DPM"][0]));
      window.location.href = "/home";
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const formValues = [
    {
      inputType: "email",
      icon: "https://img.icons8.com/ios-glyphs/20/ffffff/filled-message.png",
      inputName: "email",
      inputMinLength: 12,
      inputMaxLength: 50,
      inputPlaceholder: "ej. hola@dominio.com",
      inputLabel: "Correo Electrónico",
    },
    {
      inputType: "password",
      inputName: "password",
      icon: "https://img.icons8.com/material-outlined/24/ffffff/lock--v1.png",
      inputMinLength: 6,
      inputMaxLength: 12,
      inputPlaceholder: "******",
      inputLabel: "Contraseña",
    },
  ];

  return (
    <LoginPageComponent
      initialValues={initialValues}
      formValues={formValues}
      formOnSubmit={formOnSubmit}
    />
  );
};

export default LoginPage;
