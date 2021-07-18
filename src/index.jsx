import React from "react";
import ReactDOM from "react-dom";
import ExtraData from "./ExtraData";

const App = () => {
  return (
    <div>
      <ExtraData>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No document are listed for this customer.
        </div>
        <div className="ui primary button">Add document</div>
      </ExtraData>
      <ExtraData>
        <h4 class="ui header">For Your Information</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur, adipisci elit, sed eius modi
          tempora incidunt, ut labore et dolore magna aliqua. Ut enim ad minima
          veniam, quis nostru exercitation ullam co laborios.
        </p>
      </ExtraData>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
