import axios from "axios";
import {
  BASE_URL,
  BASE_URL_Data_Erasure,
  BASE_URL_STG,
  Data_Erasure_Endpoint,
  GET_QUOTE_ENDPOINT,
  Get_Otp_Endpoint,
  UNSUBSCRIBE_MAIL_ENDPOINT,
  Validate_Otp_Endpoint,
} from "@/constants/api-config-constant";

export const getQuote = async ({
  email,
  name = "",
  message = "",
  tel = "",
  remark = "",
}) => {
  let mobNo;
  let pageName;
  tel ? (mobNo = "+91" + tel) : (mobNo = "");
  remark.trim().length === 0 ? (pageName = "overview") : (pageName = remark);
  const url = BASE_URL + GET_QUOTE_ENDPOINT;
  return await axios.post(url, {
    email: email,
    name: name,
    message: message,
    mobile_number: mobNo,
    remark: pageName,
  });
};

export const unsubscribeEmail = async ({ email, message = "" }) => {
  const url = BASE_URL + UNSUBSCRIBE_MAIL_ENDPOINT;
  return await axios.post(url, { email: email, reasons: message });
};

export const resubscribeEmail = async ({ userId }) => {
  const url = BASE_URL + UNSUBSCRIBE_MAIL_ENDPOINT + userId + "/";
  return await axios.patch(url, { status: false });
};

export const getOtpForDataErasure = async ({ mobileNo = "", email = "" }) => {
  let url = "";
  if (mobileNo) {
    url = BASE_URL_Data_Erasure + Get_Otp_Endpoint + "?mobile=" + mobileNo;
    return await axios.get(url);
  } else if (email) {
    url = BASE_URL_Data_Erasure + Get_Otp_Endpoint + "?email=" + email;
    return await axios.get(url);
  }
};

export const validateOtp = async ({ otp = "" }) => {
  const url = BASE_URL_Data_Erasure + Validate_Otp_Endpoint;
  return await axios.post(url, { otp: otp });
};

export const eraseData = async ({ otp = "", email = "", mobileNo = "" }) => {
  const url = BASE_URL_Data_Erasure + Data_Erasure_Endpoint;
  if (mobileNo) {
    return await axios.patch(url, { otp: otp, "phone-number": mobileNo });
  } else if (email) {
    return await axios.patch(url, { otp: otp, email: email });
  }
};
