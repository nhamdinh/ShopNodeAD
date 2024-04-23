// components
import Spring from "@components/Spring";

// utils
import dayjs from "dayjs";

// assets
import avatar from "@assets/avatar.webp";
import { PATH_IMG_AVATAR } from "@utils/constants";
import { useUploadImgMutation } from "@store/components/products/productsApi";
import { Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "@store/components/auth/authSlice";

const SIZE = 5;
const sizeMax = SIZE * 1000 * 1000;

const UserProfileCard = ({ userInfo, cb_setImage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fileList, setFileList] = useState([]);
  const [avatar, setImage] = useState("");
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const avatar = new Image();
    avatar.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(avatar.outerHTML);
  };

  const [uploadImg, { isLoading: isLoadingUpload }] = useUploadImgMutation();

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const sizeImg = file ? Number(file?.size) : sizeMax + 1;
    if (sizeImg <= sizeMax) {
      let formData = new FormData();
      const fileName = Date.now() + file.name;
      formData.append("name", fileName);
      formData.append("file", file);

      try {
        const res = await uploadImg({
          formData,
          folder: PATH_IMG_AVATAR,
        });
        const data = res?.data?.metadata;
        if (data) {
          handleImageAttribute(data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  };

  const handleImageAttribute = (data) => {
    console.log(data?.thumb_url);
    setFileList([
      {
        url: data?.url,
      },
    ]);
    setImage(data?.thumb_url);
  };

  useEffect(() => {
    setFileList([{ url: userInfo?.avatar }]);
    setImage(userInfo?.avatar);
  }, [userInfo]);

  useEffect(() => {
    if (cb_setImage) cb_setImage(avatar);
  }, [avatar]);

  const logoutHandler = async () => {
    // await logout({});
    // setdataFetched({});
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <Spring
      className="card flex flex-col items-center justify-center"
      id="userProfileCard"
    >
      <div className="relative mb-3.5">
        <Upload
          fileList={fileList}
          listType="picture-card"
          accept=".png,.jpeg,.gif,.jpg"
          onChange={onChange}
          onPreview={onPreview}
          customRequest={uploadImage}
        >
          {fileList.length < 1 && "Choose file"}
        </Upload>

        {/* <Upload
          listType="picture-card"
          accept=".png,.jpeg,.gif,.jpg"
          customRequest={uploadImage}
        >
          <img
            className="avatar__icon relative rounded-full w-[110px] h-[110px]"
            src={userInfo?.avatar}
            alt="avatar__icon"
          />
        </Upload> */}

        {/* <img className="relative rounded-full w-[110px] h-[110px]" src={avatar} alt="Maria Smith"/> */}
        <button
          className="absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker"
          aria-label="Change profile picture"
        >
          <i className="inline-block icon-camera-solid mt-1" />
        </button>
      </div>
      <h4>{userInfo.name}</h4>
      <span className="badge badge--square bg-red min-w-[96px] mt-2.5">
        Admin
      </span>
      <p className="subheading-2 mt-6 mb-[18px]">
        last visit {dayjs().format("DD/MM/YYYY")}
      </p>
      <button
        onClick={logoutHandler}
        className="btn btn--secondary w-full md:max-w-[280px]"
      >
        Log Out
      </button>
    </Spring>
  );
};

export default UserProfileCard;
