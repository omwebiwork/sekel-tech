import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../Button";
import * as Yup from "yup";
import { EMPTY_INPUT, INVALID_EMAIL_ID } from "@/constants/snackbar-error-msg";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { EMAIL_REGEX_EQUATION } from "@/constants/regex-validations-constants";
import Image from "next/image";

const VerificationForm = ({ title = "Erase Data" }) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .matches(EMAIL_REGEX_EQUATION, INVALID_EMAIL_ID)
          .required(`Email ${EMPTY_INPUT}`),
      })}
      onSubmit={async (values, { resetForm }) => {
        // try {
        //   setIsLoading(true);
        //   const pageList = router.asPath.split("/");
        //   const pageName = pageList.pop();
        //   const result = await getQuote({ ...values.email });
        //   //   setIsLoading(false);
        //   if (result.status === 200 || result.data.success === true) {
        //     enqueueSnackbar("Mail sent successfully.", {
        //       variant: "success",
        //     });
        //     resetForm();
        //   } else {
        //     enqueueSnackbar("Something Went Wrong.", {
        //       variant: "error",
        //     });
        //   }
        // } catch (error) {
        //   //   setIsLoading(false);
        //   enqueueSnackbar(error.response.data.data, {
        //     variant: "error",
        //   });
        // }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="pt-[52px]">
            <h3 className="text-[28px] leading-[140%] font-medium mb-8">
              {title}
            </h3>
            <div className="flex flex-col max-w-[520px] mb-8">
              <label className="text-[16px] mb-3 block">
                Mobile No. Or Email Address
              </label>
              <div className="flex justify-between">
                <Field
                  type="phone"
                  name="mobile"
                  className={`max-md:w-full w-[calc(100%_-_150px)] h-[50px] leading-5 py-2 px-8 border border-1 border-[#D9D9D9] rounded-full focus:ring-0 focus:outline-none focus-visible:ring-0`}
                />
                <Button
                  data="Get OTP"
                  clsStyle="max-lg:w-full h-[50px] py-3 px-8 w-[130px] text-sm leading-[140%] text-black-3 block
                  bg-yellow-100 border-[#D9D9D9]"
                />
              </div>
              <ErrorMessage
                name={"mobile"}
                component="span"
                className="pt-4 text-red-600 text-center not-italic text-md"
              />
            </div>

            <div className="flex flex-col max-w-[520px] mb-8">
              <div className="mb-4">
                <label className="text-[16px] mb-3 block">
                  One Time Password (OTP)
                </label>
                <div className="flex justify-between">
                  <div className="w-[calc(100%_-_150px)] h-[50px] flex items-center gap-3">
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                    <Field
                      type="phone"
                      name="mobile"
                      className={`w-[50px] h-[50px] leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    />
                  </div>
                  <Button
                    data="Verify"
                    clsStyle="max-lg:w-full h-[50px] py-3 px-8 w-[130px] text-sm leading-[140%] text-black-3 block
                     bg-yellow-100 border-[#D9D9D9] disable:bg-[#EBEBEB] disable:border disable:border-[#D9D9D9]"
                  />
                </div>
                <ErrorMessage
                  name={"mobile"}
                  component="span"
                  className="pt-4 text-red-600 text-center not-italic text-md"
                />
              </div>
              <div className="flex items-center gap-3">
                <Image src={"/check-green.svg"} width={16} height={16} alt="" />
                <p className="font-semibold text-[#34A853]">Verified</p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <Field type="checkbox" name="ownership" className="mt-1.5 mr-4" />
              <p>
                I confirm ownership of the provided phone number/email and
                associated accounts. All submitted information is accurate, and
                I intend for accounts linked to this phone number/email to be
                permanently deleted.
              </p>
            </div>

            <Button
              data="Check data"
              clsStyle="h-[50px] max-sm:w-full py-3 px-10 bg-blue-900 border-yellow-900 text-white disable:bg-[#EBEBEB] disable:border disable:border-[#D9D9D9]"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default VerificationForm;
