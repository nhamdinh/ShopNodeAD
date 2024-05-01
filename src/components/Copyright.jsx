import logo from "@assets/merkulove.png";
import { useGetProfileQuery } from "@store/components/auth/authApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  NAME_STORAGE,
  PAGE_SIZE_999,
  PRODUCT_CATEGORY,
} from "@utils/constants";
import { setUserInfo } from "@store/components/auth/authSlice";
import { userLogout } from "@store/components/auth/authSlice";
import {
  setStoProducts,
  setStoCategories,
} from "@store/components/products/productsSlice";
import {
  useGetProductsByShopMutation,
  useGetCodesQuery,
} from "@store/components/products/productsApi";
import { PRODUCT_CATEGORIES_REAL } from "@constants/options";

const Copyright = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const {
    data: dataProfile,
    error,
    isSuccess: isSuccessProfile,
  } = useGetProfileQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const [params, setParams] = useState({
    product_shop: user?._id,
    limit: PAGE_SIZE_999,
    page: 1,
  });

  const [getProductsByShop, { isLoading }] = useGetProductsByShopMutation();

  const onGetProductsByShop = async () => {
    const res = await getProductsByShop(params);
    //@ts-ignore
    const data = res?.data;
    if (data) {
      const _products = data?.metadata?.products;
      dispatch(setStoProducts(_products));
    }
  };

  useEffect(() => {
    if (params.product_shop) onGetProductsByShop(params);
  }, [params]);

  useEffect(() => {
    setParams({
      product_shop: user?._id,
      limit: PAGE_SIZE_999,
      page: 1,
    });
  }, [user]);

  useEffect(() => {
    if (isSuccessProfile) {
      // setdataFetched(dataProfile?.metadata);
      dispatch(setUserInfo({ ...dataProfile?.metadata }));
      setUser({ ...dataProfile?.metadata });
      localStorage.setItem(NAME_STORAGE, dataProfile?.metadata?.name);
    }
  }, [dataProfile]);

  useEffect(() => {
    //@ts-ignore
    if (error?.status === 401) {
      dispatch(userLogout());
      navigate("/");
    }
  }, [error]);

  const { data: dataFetch, isSuccess } = useGetCodesQuery(
    {
      mainCode_type: PRODUCT_CATEGORY,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );
  useEffect(() => {
    if (isSuccess) {
      const options = PRODUCT_CATEGORIES_REAL.filter(
        (option) => option.value !== "all"
      );
      const lll = options.length ?? 1;

      const { mainCodes = [] } = dataFetch?.metadata;
      const __mainCodes = mainCodes.map((mm, index) => {
        const inx = index % lll;
        return {
          value: mm?._id,
          label: mm?.mainCode_value,
          icon: options[inx]?.icon,
          color: options[inx]?.color,
        };
      });
      dispatch(setStoCategories(__mainCodes));
    }
  }, [dataFetch]);

  return (
    <></>
    // <div className="flex flex-col items-center text-[10px] tracking-[0.7px] gap-2.5 sm:flex-row sm:justify-between">
    //     <p>Copyright © {new Date().getFullYear()} By nham.dinh. All Rights Reserved</p>
    //     <div className="flex items-center gap-2.5">
    //     Powered by
    //         <a href="https://1.envato.market/tf-merkulove" target="_blank" rel="noopener noreferrer">
    //             <img className="w-9 will-change-transform transition-transform hover:scale-90"
    //                  src={logo}
    //                  alt="Merkulove"/>
    //         </a>
    //     </div>
    // </div>
  );
};

export default Copyright;
