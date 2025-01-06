import "./styles.scss";
import { memo, useEffect, useRef, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import Loader from "./Loader";

import { formatCustomerPhoneNumber, rawMarkup } from "@utils/commonFunction";
import { SOCKET_HOST } from "@utils/constants";
import { getUserInfo } from "@store/selector/RootSelector";
import { useGetStoryQuery } from "@store/components/auth/authApi";

const ChatBox = ({ closeMessageBox, showMessageBox, toUser }) => {
  const userInfo = useSelector(getUserInfo);
  const [stories, setStories] = useState([]);
  // const [showMessageBox, setShowMessageBox] = useState(true);
  const [params, setParams] = useState({
    user1: "",
    user2: "",
  });
  const {
    data: dataStory,
    error,
    isSuccess,
    isLoading,
  } = useGetStoryQuery(params, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  useEffect(() => {
    if (isSuccess) {
      // console.log(dataStory)
      if (dataStory.metadata?.chatStories?.story) {
        setStories(dataStory.metadata?.chatStories?.story);
      } else {
        setStories([]);
      }
    }
  }, [dataStory]);

  useEffect(() => {
    scrollToBottom();
  }, [stories, showMessageBox]);

  useEffect(() => {
    setParams({ user1: userInfo?.email, user2: toUser?.email });
    setSocketUsernameTo(toUser?.email);
    setphone(toUser?.phone);
  }, [toUser, userInfo]);

  /*Server socketIo  */
  const [socketUsernameTo, setSocketUsernameTo] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  // const [socketId, setIdSocketId] = useState();
  const socketRef = useRef();
  const messageRef = useRef(null);

  // useEffect(() => {
  //   //@ts-ignore
  //   socketRef.current = socketIOClient.connect(SOCKET_HOST);

  //   socketRef.current.on("serverSetSocketId", (socketId) => {
  //     //   setIdSocketId(socketId);
  //   });

  //   socketRef.current.on("serverSendData", (data) => {
  //     // console.log("serverSendData ::: ", data);

  //     if (
  //       (userInfo?.email === data.to && toUser?.email === data.sendFrom) ||
  //       (userInfo?.email === data.sendFrom && toUser?.email === data.to)
  //     ) {
  //       setStories((oldMsgs) => [...oldMsgs, data]);
  //       if (userInfo?.email !== data.sendFrom) {
  //       }
  //       // setShowMessageBox(true);
  //       scrollToBottom();
  //     }
  //   });
  //   return () => {
  //     socketRef.current.disconnect();
  //   };
  // }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msgToServer = {
        // socketId: socketId,
        content: message,
        sendFrom: userInfo?.email,
        to: socketUsernameTo,
        time: moment(Date.now()),
      };
      socketRef.current.emit("clientSendData", msgToServer);
      setMessage("");
      messageRef.current.focus();
    }
  };

  const scrollToBottom = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView();
    }
  };

  const renderStory = stories.map((story, index) => {
    return (
      <div
        key={index}
        className={
          story?.sendFrom === userInfo?.email
            ? `your__message`
            : `other__people`
        }
      >
        <p>{moment(story?.time).format("llll")}</p>
        <div dangerouslySetInnerHTML={rawMarkup(story?.content)}></div>
      </div>
    );
  });

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  /*Server socketIo  */

  return (
    <div className="ChatBox">
      <div className={"box__chat"}>
        <p
          onClick={() => {
            closeMessageBox();
            // setShowMessageBox(false);
          }}
          className="box__chat__name"
        >
          {socketUsernameTo} - {formatCustomerPhoneNumber(phone.toString())}
        </p>
        {isLoading ? (
          <Loader radius={30} />
        ) : (
          <div className="box__chat_message">
            {renderStory}
            <div id="section-1" style={{ float: "left", clear: "both" }}></div>
          </div>
        )}

        <div className="send__box">
          <textarea
            ref={messageRef}
            value={message}
            onKeyDown={onEnterPress}
            onChange={(event) => {
              if (event.target.value !== "\n") setMessage(event.target.value);
            }}
            placeholder="Enter message ..."
          />
          <button className="send__box__button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(ChatBox);
