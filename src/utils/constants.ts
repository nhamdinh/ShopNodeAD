// export const API_LINK = "http://104.154.49.183:5000/api";
export const REACT_ENV = process.env.REACT_APP_ENV;
export const API_LINK = process.env.REACT_APP_API_URL ?? "http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:5000/api";
export const SOCKET_HOST = process.env.REACT_APP_SOCKET_HOST ?? 'http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:6000';

// export const API_LINK = 'http://localhost:5000/api';
// export const SOCKET_HOST = 'http://localhost:6000';
/* env */
export const NAME_STORAGE = "nameAdmin";
export const ACCESSTOKEN_STORAGE = "accessTokenAdmin";
export const LANG_STORAGE = "langAdmin";
export const FOLDER_CATEGORYS_STORAGE = "categorys";
export const FOLDER_PRODUCS_STORAGE = "products";
export const PAGE_SIZE = 8;
export const PAGE_SIZE_10 = 10;
export const REGEX_CURRENCY = /(\d)(?=(\d{3})+(?!\d))/g;
export const DATE_FORMAT = "YYYY-MM-DD";
export const RE_ONLY_NUMBER = /^-?\d*(\.\d+)?$/;

export const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 1000,
};
export const GIO: any = {
  THUONG: 170,
  THUONG_500G: 85,
  VIP: 210,
  VIP_500G: 105,
  BAP_CUON: 270,
  BAP_THUONG: 270,
  BAP_VAN: 280,
  GAN_NGAM: 110,
  BAP_NGAM: 150,
};

export const GIO_BUY: any = {
  THUONG: 130,
  THUONG_500G: 65,
  VIP: 180,
  VIP_500G: 90,
  BAP_CUON: 180,
  BAP_THUONG: 180,
  BAP_VAN: 200,
  GAN_NGAM: 65,
  BAP_NGAM: 95,
};
export const GIO_RENDER: any = {
  THUONG: "GIÒ THƯỜNG 1KG",
  THUONG_500G: "GIÒ THƯỜNG 500G",
  VIP: "GIÒ VIP 1KG",
  VIP_500G: "GIÒ VIP 500G",
  BAP_CUON: "BẮP CUỘN",
  BAP_THUONG: "BẮP TO",
  BAP_VAN: "BẮP VÂN",
  GAN_NGAM: "GÂN _NGÂM_",
  BAP_NGAM: "BẮP _NGÂM_",
};