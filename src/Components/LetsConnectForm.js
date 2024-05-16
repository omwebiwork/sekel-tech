import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./comman/Button";

const LetsConnectForm = () => {
  return (
    <div>
      <div className="text-center mb-[52px]">

      <h4 className="text-[42px] text-white font-medium leading-[52px] mb-1.5">Let's Connect</h4>
      <p className="text-base font-semibold text-white">Understand Our Solution Better!</p>
      </div>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Field className='bg-white mb-4 rounded-lg bg-opacity-10 w-full py-3 px-5' placeholder='your name'  name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <Field className='bg-white mb-4 rounded-lg bg-opacity-10 w-full py-3 px-5' placeholder='your email' name="email" type="email" />
        <ErrorMessage name="email" />

        <Field component="textArea" className='bg-white mb-4 rounded-lg bg-opacity-10 w-full py-3 px-5 min-h-[181px]' placeholder='your email' name="email" type="email" />
        <ErrorMessage name="email" />
       <Button data='Get a Free Quote' filled type="submit"/>
      </Form>
    </Formik>
    </div>
  );
};

export default LetsConnectForm;
