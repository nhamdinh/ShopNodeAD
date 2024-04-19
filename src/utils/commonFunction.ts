import { REGEX_CURRENCY } from "./constants";

export const passwordCheck = (pass: any) => {
  let regex =
    /^(?=[^0-9\n]*[0-9])(?=.*[a-zA-Z])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,20}$/;
  if (regex.exec(pass) == null) {
    // alert("invalid password!");
    return false;
  } else {
    // console.log("valid");
    return true;
  }
};

export const getUrlParams = (id: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let paramValue = urlParams.get(id) || "";
  return paramValue;
};

export const removeNonNumeric = (num: string) => {
  const result = ~~num.replace(/[^\d]/g, "");
  return result;
};

export const addCommas = (num: any, style = ",") => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, style);
};

export const formatMoneyCurrency = (text: any) => {
  if (!text) {
    return "0.00";
  }
  //format china currency delivery_type === 1
  let numberText = +text;
  let string = numberText.toFixed(2).toString();
  let length = string.length;
  let string_slice = string.substr(0, length - 3);
  let string_slice3 = string.substr(length - 3, length - 1);
  return addCommas(removeNonNumeric(string_slice)) + string_slice3;
};

export const rawMarkup = (rawMarkup = "") => {
  return { __html: rawMarkup };
};

export const formatCustomerPhoneNumber = (value: string) => {
  if (!value) return;
  //KOC 516
  return `${value.slice(0, 4)}-${value.slice(4, 7)}-${value.slice(7)}`;
};

export const formatPhone = (val: string) => {
  return val.replace(" ", "").replace(/[^0-9 ]+/g, "");
};
export const formatMoney = (text: any) => {
  if (!text) {
    return "0";
  }
  if (+text < 0) {
    text = +text * -1;
    return "-" + text.toString().replace(REGEX_CURRENCY, "$1,");
  }
  return text.toString().replace(REGEX_CURRENCY, "$1,");
};
export const findUniqueElements = (array1:any, array2:any) => {
  const result = array1.filter((item:any) => !array2.includes(item));
  return result;
};