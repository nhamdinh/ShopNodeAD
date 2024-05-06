// components
import PageHeader from "@layout/PageHeader";
import AppsGrid from "@widgets/AppsGrid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserInfo } from "@store/selector/RootSelector";
import { useGetUserClientsQuery } from "@store/components/auth/authApi";
import { setUserInfo } from "@store/components/auth/authSlice";

const ConnectedApps = () => {
  const dispatch = useDispatch();
  const [userInfo, setUser] = useState({});
  
  const {
    data: dataProfile,
    error,
    isSuccess: isSuccessProfile,
  } = useGetUserClientsQuery(
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
      setUser({ ...dataProfile?.metadata });
    }
  }, [dataProfile]);
  return (
    <>
      <PageHeader title="Connected" />
      <AppsGrid userInfo={userInfo} />
    </>
  );
};

export default ConnectedApps;
