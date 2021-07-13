import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { generateInput } from "../FormikInputs/generateFormikInput";

//Components
import Button from "../../Button";

const FormRender = ({
  initialValues,
  textButton,
  formOnSubmit,
  formValues,
  validationSchema,
  title,
  data,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="register-box">
      <h3 className="text-center">{title}</h3>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => formOnSubmit(values, dispatch, data)}
        validationSchema={validationSchema}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div className="containerForm">
              {formValues
                ? formValues.map((element, index) => (
                    <div className="containerForm__item" key={index}>
                      {generateInput(
                        element,
                        errors,
                        touched,
                        dispatch,
                        setFieldValue,
                        initialValues
                      )}
                    </div>
                  ))
                : null}
            </div>
            <Button textButton={textButton} type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRender;
