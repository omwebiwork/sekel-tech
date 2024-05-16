import axios from "axios";
import { BASE_URL, GET_QUOTE_ENDPOINT } from "@/constants/api-config-constant";



export const getQuote = async ({ email, name = '', message = '' }) => {
    const url = BASE_URL + GET_QUOTE_ENDPOINT;
    return await axios.post(url, { email: email, name: name, message: message });
};