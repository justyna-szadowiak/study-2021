import React from "react";

const MessageDetail = (props) => {
  return (
    <div className="message">
      <div className="header">
        <a href="/" className="mainHeader">
          {props.mainHeader}
        </a>
      </div>
      <div>
        <a href="/" className="paragraph">
          {props.paragraph}
        </a>
      </div>
    </div>
  );
};

export default MessageDetail;
