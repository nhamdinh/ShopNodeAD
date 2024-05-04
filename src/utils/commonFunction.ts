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
  // console.log(text)
  let numberText = +text;
  if (+text < 0) {
    numberText = +numberText * -1;
  }

  let string = numberText.toFixed(2).toString();
  let length = string.length;
  let string_slice = string.substr(0, length - 3);
  let string_slice3 = string.substr(length - 3, length - 1);
  if (+text < 0)
    return (
      "-" +
      string_slice.toString().replace(REGEX_CURRENCY, "$1,") +
      string_slice3
    );
  return string_slice.toString().replace(REGEX_CURRENCY, "$1,") + string_slice3;
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
export const findUniqueElements = (array1: any, array2: any) => {
  const result = array1.filter((item: any) => !array2.includes(item));
  return result;
};

export const calPerDiscount = (product: any) => {
  const perDiscount = (
    (1 - product?.product_price / product?.product_original_price) *
    100
  ).toFixed(0);
  return perDiscount;
};

export const removeNullObject = (obj) => {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      obj[key] = removeNullObject(obj[key]);
      // if (Object.keys(obj[key]).length === 0) {
      //   delete obj[key];
      // }
    }
  }

  return obj;
};
export const updateNestedObjectParser = (obj) => {
  const final = {};

  const recurse = (obj, currentKey = "") => {
    for (let key in obj) {
      if (obj[key] !== null && obj[key] !== undefined) {
        // console.log(`!Array.isArray(obj[key]) ::: ${JSON.stringify(obj[key])} ::: ${!Array.isArray(obj[key])}`);
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          if (currentKey !== "") {
            recurse(obj[key], `${currentKey}.${key}`);
          } else {
            recurse(obj[key], key);
          }
        } else {
          if (currentKey !== "") {
            final[`${currentKey}.${key}`] = obj[key];
          } else {
            final[key] = obj[key];
          }
        }
      }
    }
  };

  recurse(obj);

  return final;
};
