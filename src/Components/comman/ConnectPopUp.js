import {
  EMAIL_REGEX_EQUATION,
  IS_VALID_TEXT,
  MOBILE_REGEX,
} from "@/constants/regex-validations-constants";
import {
  CHAR_INPUT,
  EMPTY_INPUT,
  INVALID_EMAIL_ID,
} from "@/constants/snackbar-error-msg";
import { getQuote } from "@/services/get-quote";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

function ConnectPopUp({ handleBack }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value === "") {
      setEmailError(`Email ${EMPTY_INPUT}`);
    } else {
      const reg = new RegExp(EMAIL_REGEX_EQUATION).test(value);
      if (!reg) {
        setEmailError(INVALID_EMAIL_ID);
      } else {
        setEmailError("");
      }
    }
  };
  const onNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    if (value === "") {
      setNameError(`Name ${EMPTY_INPUT}`);
    } else {
      const reg = new RegExp(IS_VALID_TEXT).test(value);
      if (!reg) {
        setNameError(`Name ${CHAR_INPUT}`);
      } else {
        setNameError("");
      }
    }
  };
  const onTelChange = (e) => {
    const { value } = e.target;
    setTel(value);
    if (value) {
      const reg = new RegExp(MOBILE_REGEX).test(value);
      if (!reg) {
        setTelError(`Phone Number should be valid`);
      } else {
        setTelError("");
      }
    } else {
      setTelError("");
    }
  };
  const onMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
    if (value === "") {
      setMessageError(`Message ${EMPTY_INPUT}`);
    } else {
      setMessageError("");
    }
  };

  const onSubmit = async () => {
    if (name === "") {
      setNameError(`Name ${EMPTY_INPUT}`);
    } else if (email === "") {
      setEmailError(`Email ${EMPTY_INPUT}`);
    } else if (message === "") {
      setMessageError(`Message ${EMPTY_INPUT}`);
    } else {
      try {
        setMessageError("");
        setEmailError("");
        setNameError("");
        setTelError("");
        setIsLoading(true);
        const pageList = router.asPath.split("/");
        const pageName = pageList.pop();
        const result = await getQuote({
          email,
          name,
          message,
          tel,
          remark: pageName,
        });
        setIsLoading(false);
        if (result.status === 200 || result.data.success === true) {
          enqueueSnackbar("Mail sent successfully.", { variant: "success" });
          setName("");
          setEmail("");
          setMessage("");
          setTel("");
        } else {
          enqueueSnackbar("Something Went Wrong.", { variant: "error" });
        }
      } catch (error) {
        setIsLoading(false);
        enqueueSnackbar(error, { variant: "error" });
      }
    }
  };
  return (
    <div className="ml-auto w-full max-w-[28rem] max-sm:max-w-[24rem]">
      <div className="bg-white shadow-[2px_2px_13px_-1px_rgba(0,0,0,0.25)] rounded-[20px] flex py-8 px-6 flex-col text-left w-full max-h-[calc(100vh_-_200px)] overflow-y-auto">
        <button onClick={handleBack} className="flex items-center gap-x-4 mb-8">
          <span>
            <Image
              className="rotate-180"
              src={"/right-arrow.svg"}
              height={18}
              width={18}
              alt=""
            />
          </span>
          <span className="text-secondary">Back</span>
        </button>
        <h1 className="font-bold text-secondary leading-[15px] text-[16px] px-3 py-4 rounded-xl gap-x-4 bg-yellow-100">
          Leave an Enquiry
        </h1>
        <div className="mt-3 gap-4">
          <div className="w-full mb-4">
            <input
              type="text"
              className="w-full border rounded-[8px] p-3 border-gray-coc outline-none shadow-none placeholder:text-gray-300 h-[42px]"
              placeholder="Your Name"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="w-full mb-4">
            <input
              type="email"
              className="w-full border rounded-[8px] p-3 border-gray-coc outline-none shadow-none placeholder:text-gray-300 h-[42px]"
              placeholder="Email Address"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="w-full mb-4">
            <input
              type="tel"
              className="w-full border rounded-[8px] p-3 border-gray-coc outline-none shadow-none placeholder:text-gray-300 h-[42px]"
              placeholder="Phone no."
              value={tel}
              onChange={onTelChange}
            />
          </div>
          <div className="w-full mb-4">
            <textarea
              rows="4"
              className="w-full h-20 border w-full rounded-[8px] p-3 border-gray-coc outline-none shadow-none placeholder:text-gray-300 h-[120px]"
              placeholder="Message"
              value={message}
              onChange={onMessageChange}
            />
          </div>
          {emailError || nameError || messageError || telError ? (
            <div className="w-full mb-4">
              <p className="font-sans text-red-600 text-center not-italic text-md">
                {emailError || nameError || messageError || telError}
              </p>
            </div>
          ) : null}
          <button
            onClick={onSubmit}
            type="submit"
            disabled={
              emailError || telError || nameError || messageError || isLoading
                ? true
                : false
            }
            className="w-full font-semibold h-[45px] lg:h-[56px] text-white bg-blue-900 min-w-[10rem] rounded-[8px] text-center"
          >
            {isLoading ? "Loading..." : "Submit Form"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectPopUp;
