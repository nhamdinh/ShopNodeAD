import logo from "@assets/merkulove.png";
import { useGetProfileQuery } from "@store/components/auth/authApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NAME_STORAGE, PAGE_SIZE_999 } from "@utils/constants";
import { setUserInfo } from "@store/components/auth/authSlice";
import { userLogout } from "@store/components/auth/authSlice";
import { useGetPublishedProductsQuery } from "@store/components/products/productsApi";
import { setStoProducts } from "@store/components/products/productsSlice";
import { useGetProductsByShopMutation } from "@store/components/products/productsApi";

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
