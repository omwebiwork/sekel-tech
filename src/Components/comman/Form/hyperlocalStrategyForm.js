import Button from "../Button";
import { EMAIL_REGEX_EQUATION } from "@/constants/regex-validations-constants";
import { EMPTY_INPUT, INVALID_EMAIL_ID } from "@/constants/snackbar-error-msg";
import { getQuote } from "@/services/get-quote";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";

const HyperlocalStrategyForm = ({
  title = "Supercharge Your Hyperlocal Strategy Today!",
  placeholder = "Enter your email",
  buttonTitle = "Get a  FREE Audit",
  containerSty = "",
  showForm = true,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" bg-yellow-100 py-[18px] px-10 rounded-[14px]">
      <div className={`${containerSty} flex gap-8`}>
        <p className="text-[28px] text-blue-600 font-medium">{title}</p>
        {showForm && (
          <div className="flex-1">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .matches(EMAIL_REGEX_EQUATION, INVALID_EMAIL_ID)
                  .required(`Email ${EMPTY_INPUT}`),
              })}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setIsLoading(true);
                  const result = await getQuote({ email });
                  setIsLoading(false);
                  if (result.status === 200 || result.data.success === true) {
                  enqueueSnackbar("Mail sent successfully.", {
                    variant: "success",
                  });
                  console.log("values", values);
                  resetForm();
                  } else {
                    enqueueSnackbar("Something Went Wrong.", {
                      variant: "error",
                    });
                  }
                } catch (error) {
                  setIsLoading(false);
                  enqueueSnackbar(error.response.data.data, {
                    variant: "error",
                  });
                }
              }}
            >
              {({}) => (
                <Form>
                  <div className="flex gap-4 ">
                    <Field
                      className="text-black-33 placeholder:text-black-33 flex-grow leading-5 py-2 px-8 border border-1 border-gray-400  rounded-full bg-white focus:ring-0 focus:outline-none focus-visible:ring-0"
                      type="email"
                      placeholder={placeholder}
                      name="email"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      data={buttonTitle}
                      clsStyle="py-3 px-10 bg-blue-900 border-blue-900 text-white"
                    />
                  </div>

                  <ErrorMessage
                    name="email"
                    component="span"
                    className="font-sans pt-4 text-red-600 text-center not-italic text-md"
                  />
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default HyperlocalStrategyForm;
