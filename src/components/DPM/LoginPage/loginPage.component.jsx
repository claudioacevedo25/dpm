import React from "react";
import FormRender from "../../Formik/FormikForm";
import { LoginSchema } from "../../../validations/formValidations";
import { connect } from "react-redux";
import { login } from "../../../redux/auth/authActions";

const LoginPageComponent = ({
  initialValues,
  formOnSubmit,
  formValues,
  login,
}) => {
  return (
    <div className="container">
      <FormRender
        initialValues={initialValues}
        formOnSubmit={(values) => formOnSubmit(values, login)}
        formValues={formValues}
        textButton="Entrar"
        validationSchema={LoginSchema}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPageComponent);
