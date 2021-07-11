import React from "react";
import MessageDetail from "./MessageDetail";

const Message = (props) => {
  return (
    <div className="ui message">
      <MessageDetail
        mainHeader="Changes in Service"
        paragraph="We just updated our privacy policy here to better service our customers."
      />
    </div>
  );
};

export default Message;
