import logo from "@assets/merkulove.png";
import { useGetProfileQuery } from "@store/components/auth/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NAME_STORAGE } from "@utils/constants";
import { setUserInfo } from "@store/components/auth/authSlice";
import { userLogout } from "@store/components/auth/authSlice";

const Copyright = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: dataProfile,
    error,
    isSuccess: isSuccessProfile,
    isLoading,
  } = useGetProfileQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    if (isSuccessProfile) {
      // setdataFetched(dataProfile?.metadata);
      dispatch(setUserInfo({ ...dataProfile?.metadata }));
      localStorage.setItem(NAME_STORAGE, dataProfile?.metadata?.name);
    }
  }, [dataProfile]);

  useEffect(() => {
    //@ts-ignore
    if (error?.status === 401) {
    //   dispatch(userLogout());
    //   navigate("/");
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