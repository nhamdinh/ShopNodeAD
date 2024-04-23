// components
import Spring from "@components/Spring";
import Switch from "@ui/Switch";
import TruncatedText from "@components/TruncatedText";
import avatar_user from "@assets/user.png";

// hooks
import useMeasure from "react-use-measure";
import { formatCustomerPhoneNumber } from "@utils/commonFunction";
import ChatBox from "./ChatBox";
import { memo, useState } from "react";
import { useClearCountChatMutation } from "@store/components/auth/authApi";

const AppCard = ({ app, index, category }) => {
  const [titleRef, { width: titleWidth }] = useMeasure();
  const [descriptionRef, { width: descriptionWidth }] = useMeasure();
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [clearCountChat, { isLoading, error }] = useClearCountChatMutation();

  const onClearCountChat = async (values) => {
    const res = await clearCountChat(values);

    //@ts-ignore
    const data = res?.data;

    if (data) {
      // console.log(data);
    } else {
    }
  };

  return (
    <Spring
      className="card flex flex-col gap-4 !pt-5 !px-5 min-h-[182px]"
      type="slideUp"
      index={index}
    >
      <div className="flex flex-1 justify-between items-start">
        <div className="flex flex-1 items-start gap-3">
          <div
            className="w-11 h-11 rounded-lg bg-white border border-solid border-input-border flex
                         justify-center items-center"
          >
            <img
              loading="lazy"
              className="h-9 w-auto "
              src={app.avatar ?? avatar_user}
              alt={app.name}
            />
          </div>
          <h6 className="max-w-[165px] w-full leading-[1.4]" ref={titleRef}>
            <TruncatedText text={app.name} width={titleWidth} />
          </h6>
        </div>
        <Switch id={app._id} defaultChecked />
      </div>
      <p className="text-sm flex-1 max-w-[300px]" ref={descriptionRef}>
        <a className="color__1890ff" href={`mailto:${app?.email}`}>
          <TruncatedText text={app.email} width={descriptionWidth} />
        </a>
      </p>
      <p className="text-sm flex-1 max-w-[300px]" ref={descriptionRef}>
        <TruncatedText
          text={formatCustomerPhoneNumber(app.phone + "")}
          width={descriptionWidth}
        />
      </p>

      {category === "finances" ? (
        <div
          onClick={() => {
            setShowMessageBox(!showMessageBox);

            //render-re
            onClearCountChat({ email: app?.email });
          }}
          className="Chat"
        >
          Chat
          <div className={app?.countChat > 0 ? "co__chat ani" : "co__chat"}>
            {app?.countChat}
          </div>
        </div>
      ) : (
        <button className="text-btn">View settings</button>
      )}

      {showMessageBox && (
        <ChatBox
          closeMessageBox={() => {
            setShowMessageBox(false);
          }}
          showMessageBox={showMessageBox}
          toUser={app}
        />
      )}
    </Spring>
  );
};

export default memo(AppCard);
