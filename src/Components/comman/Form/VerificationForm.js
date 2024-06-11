import { useState, useRef, useCallback } from "react";
import Image from "next/image";

import { useSnackbar } from "notistack";

import Button from "../Button";
import {
  EMAIL_REGEX_EQUATION,
  MOBILE_REGEX,
} from "@/constants/regex-validations-constants";
import { getOtpForDataErasure, validateOtp } from "@/services/get-quote";

const VerificationForm = ({ title = "Erase Data", onHandleSubmit }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMobileError, setIsMobileError] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [userEmailOrMobileNo, setUserEmailOrMobileNo] = useState("");
  const [otp, setOpt] = useState("");
  const [deleteDataConfirmation, setDeleteDataConfirmation] = useState(false);
  const otpRef = useRef([]);

  const handleSubmit = useCallback(() => {
    if (onHandleSubmit) {
      onHandleSubmit(isEmail, otp, userEmailOrMobileNo, () => {
        setUserEmailOrMobileNo("");
        setOpt("");
        setDeleteDataConfirmation(false);
        setIsOtpVerified(false);
      });
    }
  }, [isEmail, otp, userEmailOrMobileNo]);

  function onOtpChange(event, i) {
    const val = event.target.value;
    if (event.nativeEvent.inputType === "deleteContentBackward" && val === "") {
      const newOtp = [...otp];
      newOtp.splice(i, 1); // Clear the previous input value
      setOpt(newOtp);
      if (i > 0) {
        otpRef.current[i - 1].focus(); // Move focus to the previous input
      }
      return;
    }
    const newVal = [...otp, val];
    setOpt(newVal);
    if (i < 5) {
      // 5 because index starts from 0 and we have 6 inputs
      otpRef.current[i + 1].focus();
    }
  }
  const handleInputKeyDown = (i, event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault(); // Prevent default behavior of deleting input value
      if (event.key === "Backspace" && i > 0) {
        otpRef.current[i - 1].focus(); // Move focus to previous input
      } else if (event.key === "Delete" && i < 5) {
        otpRef.current[i + 1].focus(); // Move focus to next input
      }
      const newOtp = [...otp];
      newOtp.splice(i, 1); // Clear the previous input value
      setOpt(newOtp);
      // otpRef.current[i].value = ''; // Clear current input value
      // You can also trigger a change event here if necessary
    }
  };
  function verifyOtp() {
    try {
      const otpStr = otp.join("");
      setIsVerifying(true);
      validateOtp({ otp: otpStr })
        .then(() => {
          setIsOtpVerified(true);
          setIsVerifying(false);
        })
        .catch(() => {
          setIsVerifying(false);
          enqueueSnackbar("Please enter correct otp", { variant: "error" });
        });
    } catch (error) {
      setIsVerifying(false);
      console.log("error in verify otp");
    }
  }

  function validateEmail() {
    const reg = new RegExp(EMAIL_REGEX_EQUATION).test(userEmailOrMobileNo);
    if (!reg) {
      setIsEmailError("Email should be valid");
    } else {
      setIsEmailError(false);
      setIsEmail(true);
    }
  }
  function validateMobile() {
    const reg = new RegExp(MOBILE_REGEX).test(userEmailOrMobileNo);
    if (!reg) {
      setIsMobileError("Mobile should be valid");
    } else {
      setIsMobileError(false);
      setIsEmail(false);
    }
  }

  async function onGetOtp() {
    validateEmail();
    validateMobile();
    setIsLoading(true);
    if (!isEmailError && isMobileError) {
      try {
        await getOtpForDataErasure({ email: userEmailOrMobileNo })
          .then(() => {
            enqueueSnackbar("Otp sent successfully.", { variant: "success" });
          })
          .catch(() => {
            enqueueSnackbar("Something Went Wrong.", { variant: "error" });
          });
      } catch (error) {
        enqueueSnackbar("Something Went Wrong.", { variant: "error" });
      }
      setIsLoading(false);
    } else if (isEmailError && !isMobileError) {
      try {
        await getOtpForDataErasure({ mobileNo: userEmailOrMobileNo })
          .then(() => {
            enqueueSnackbar("Otp sent successfully.", { variant: "success" });
          })
          .catch(() => {
            enqueueSnackbar("Something Went Wrong.", { variant: "error" });
          });
      } catch (error) {
        enqueueSnackbar("Something Went Wrong.", { variant: "error" });
      }
      setIsLoading(false);
    } else if (!isEmailError && !isMobileError) {
      setIsLoading(false);
      return;
    }
  }

  function onCheckboxChange() {
    setDeleteDataConfirmation((val) => {
      return !val;
    });
  }

  return (
    <div className="pt-[52px]">
      <h3 className="text-[28px] leading-[140%] font-medium mb-8">{title}</h3>
      <div className="flex flex-col max-w-[520px] mb-8">
        <label className="text-[16px] mb-3 block">
          Mobile No. Or Email Address
        </label>
        <div className="flex justify-between">
          <input
            type="text"
            value={userEmailOrMobileNo}
            onInput={(e) => {
              setUserEmailOrMobileNo(e.target.value);
            }}
            name=""
            id=""
            placeholder="Enter phone no. or email address"
            className={`max-md:w-full w-[calc(100%_-_150px)] h-[50px] leading-5 py-2 px-8 border border-1 border-[#D9D9D9] rounded-full focus:ring-0 focus:outline-none focus-visible:ring-0`}
          />
          <Button
            disabled={!userEmailOrMobileNo}
            action={onGetOtp}
            data={isLoading ? "Loading..." : "Get OTP"}
            clsStyle="max-lg:w-full h-[50px] py-3 px-8 w-[130px] text-sm leading-[140%] text-black-3 block
                  bg-yellow-100 border-[#D9D9D9]"
          />
        </div>
        {isEmail
          ? isEmailError && (
              <p className="text-red-600 text-sm font-sans font-normal">
                {isEmailError}
              </p>
            )
          : isMobileError && (
              <p className="text-red-600 text-sm font-sans font-normal">
                {isMobileError}
              </p>
            )}
      </div>

      <div className="flex flex-col max-w-[520px] mb-8">
        <div className="mb-4">
          <label className="text-[16px] mb-3 block">
            One Time Password (OTP)
          </label>
          <div className="flex justify-between">
            <div className="w-[calc(100%_-_150px)] h-[50px] flex items-center gap-3">
              {[...Array(6)].map((x, i) => {
                return (
                  <input
                    value={otp[i] ? otp[i] : ""}
                    ref={(ref) => otpRef.current.push(ref)}
                    onKeyDown={(event) => handleInputKeyDown(i, event)}
                    onInput={(event) => onOtpChange(event, i)}
                    key={i}
                    className={`w-[50px] h-[50px] text-center leading-5 p-4 border border-1 border-[#D9D9D9] rounded-[8px] outline-none shadow-none focus:border-blue-600`}
                    maxLength="1"
                    type="tel"
                    name=""
                    id=""
                  />
                );
              })}
            </div>
            <Button
              action={verifyOtp}
              disabled={otp.length !== 6}
              data={isVerifying ? "Loading..." : "Verify"}
              clsStyle="max-lg:w-full h-[50px] py-3 px-8 w-[130px] text-sm leading-[140%] text-black-3 block
                     bg-yellow-100 border-[#D9D9D9] disable:bg-[#EBEBEB] disable:border disable:border-[#D9D9D9]"
            />
          </div>
        </div>
        {isOtpVerified && (
          <div className="flex items-center gap-3">
            <Image src={"/check-green.svg"} width={16} height={16} alt="" />
            <p className="font-semibold text-[#34A853]">Verified</p>
          </div>
        )}
      </div>

      <div className="flex items-start mb-8">
        <input
          checked={deleteDataConfirmation}
          type="checkbox"
          value={deleteDataConfirmation}
          defaultChecked={deleteDataConfirmation}
          onChange={onCheckboxChange}
          className="mt-1.5 mr-4"
        />
        <p>
          I confirm ownership of the provided phone number/email and associated
          accounts. All submitted information is accurate, and I intend for
          accounts linked to this phone number/email to be permanently deleted.
        </p>
      </div>

      <Button
        disabled={!(deleteDataConfirmation && isOtpVerified)}
        data="Permanently Erase Data"
        type="button"
        action={() => handleSubmit()}
        clsStyle="h-[50px] max-sm:w-full py-3 px-10 bg-blue-900 border-yellow-900 text-white disable:bg-[#EBEBEB] disable:border disable:border-[#D9D9D9]"
      />
    </div>
  );
};
export default VerificationForm;
