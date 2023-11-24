import React from "react";
import ReactDOM from "react-dom/client";

// React elemet
const TitleHeading = () => <h1 id="high">I am JSX Heading</h1>;
const HeadingComponent = () => (
  <div id="container">
    <TitleHeading />
    <h1 id="jsx">I am from the functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
