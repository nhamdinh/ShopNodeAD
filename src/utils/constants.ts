// export const API_LINK = "http://104.154.49.183:5000/api";
export const VITE_ENV = process.env.VITE_APP_ENV;
export const API_LINK = process.env.VITE_APP_API_URL ?? "http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:5000/api";
export const SOCKET_HOST = process.env.VITE_APP_SOCKET_HOST ?? 'http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:6000';

// export const API_LINK = 'http://localhost:5000/api';
// export const SOCKET_HOST = 'http://localhost:6000';
/* env */
export const NAME_STORAGE = "nameAdmin";
export const ACCESSTOKEN_STORAGE = "accessTokenAdmin";
export const LANG_STORAGE = "langAdmin";
export const FOLDER_CATEGORYS_STORAGE = "categorys";
export const FOLDER_PRODUCS_STORAGE = "products";
export const PAGE_SIZE = 6;
export const PAGE_SIZE_8 = 8;
export const PAGE_SIZE_10 = 10;
export const PAGE_SIZE_12 = 12;
export const PAGE_SIZE_1 = 1;
export const PAGE_SIZE_999 = 999;
export const SAFE_STOCK = 300;
export const PATH_IMG_AVATAR = "avatar";
export const PRODUCT_CATEGORY = 'PRODUCT_MODEL';

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
  THUONG: 200,
  THUONG_500G: 100,
  VIP: 250,
  VIP_500G: 125,
  BAP_CUON: 280,
  BAP_THUONG: 280,
  BAP_VAN: 300,
  GAN_NGAM: 110,
  BAP_NGAM: 140,
};

export const GIO_BUY: any = {
  THUONG: 135,
  THUONG_500G: 65,
  VIP: 180,
  VIP_500G: 90,
  BAP_CUON: 190,
  BAP_THUONG: 190,
  BAP_VAN: 210,
  GAN_NGAM: 70,
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
  GAN_NGAM: "_NGÂM_ GÂN",
  BAP_NGAM: "_NGÂM_ BẮP",
};
