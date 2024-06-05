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

function LetConnectPopUp({ handleEnquiryOpen }) {
  const router = useRouter();

  return (
    <div className="w-[28rem] max-sm:w-[24rem] bg-white shadow-[2px_2px_13px_-1px_rgba(0,0,0,0.25)] rounded-[20px]">
      <div className="flex px-6 py-8 flex-col text-left w-full">
        <h1 className="font-bold text-secondary text-[24px] mb-21">
          {`Let's `}Connect
        </h1>
        <h2 className="text-light-secondary text-[16px] mb-8">
          Understand our solution Better!
        </h2>
        <div className="flex flex-col gap-4">
          <button
            className="flex items-center bg-blue-200 p-4 rounded-xl gap-x-4"
            onClick={() => {
              handleEnquiryOpen();
            }}
          >
            <span>
              <Image src={"/qustion-icon.svg"} width={25} height={25} alt="" />
            </span>
            <span className="text-light-secondary text-[16px] font-medium">
              Leave an Enquiry
            </span>
          </button>
          <button
            className="flex items-center bg-blue-200 p-4 rounded-xl gap-x-4"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=917420844946",
                "_blank"
              )
            }
          >
            <span>
              <Image src={"/whatsapp.png"} width={25} height={25} alt="" />
            </span>
            <span className="text-light-secondary text-[16px] font-medium">
              Chat with SekelAssist
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LetConnectPopUp;
