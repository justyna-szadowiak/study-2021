import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Message />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
