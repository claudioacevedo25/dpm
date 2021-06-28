import * as Yup from "yup";
//error messages
const fieldRequired = "Campo requerido";
const validText = "Por favor ingrese un texto válido";
const validEmail = "Por favor ingrese un formato de email válido";
const validMinLenghtPassword = "Por favor ingrese 6 caracteres mínimo";
const validOrder = "Por favor, ingresar un numero mayor a 1";
const validMinLenght = (caracteres) => {
  return `Por favor ingrese ${caracteres} caracteres mínimo`;
};

//regex
const textRegex = /[a-zA-Z áéíóúÁÉÍÓÚñÑ]/;
const passwordRegex = /[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_!?]/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, validMinLenght(6))
    .matches(passwordRegex, validText)
    .required(fieldRequired),
  email: Yup.string().email(validEmail).required(fieldRequired),
});
