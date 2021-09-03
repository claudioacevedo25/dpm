import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import FormRender from "../../Formik/FormikForm";
import { LoginSchema } from "../../../validations/formValidations";
import { connect } from "react-redux";
import { login } from "../../../redux/auth/authActions";
import "./index.css";

const LoginPageComponent = ({ initialValues, formOnSubmit, formValues }) => {
  const [isFail, setIsFail] = useState(false);
  const handlelogin = async (values) => {
    try {
      await formOnSubmit(values);
    } catch (error) {
      setIsFail(true);

      console.log("error :>> ");
    }
  };
  console.log("isFail :>> ", isFail);

  return (
    <div className="login">
      <FormRender
        initialValues={initialValues}
        formOnSubmit={(values) => handlelogin(values)}
        formValues={formValues}
        textButton="Entrar"
        validationSchema={LoginSchema}
      />
      {isFail && (
        <Typography className="login__fail">
          El correo electrónico o contraseña es incorrecto
        </Typography>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPageComponent);
