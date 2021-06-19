import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 7.45AM"
        comment="Great!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 9:35PM"
        comment="Good job!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jim"
        timeAgo="Yesterday at 6:05PM"
        comment="Very interesting"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
