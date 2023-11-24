import React from "react";
import ReactDOM from "react-dom/client";

// React elemet
// const TitleHeading = () => <h1 id="high">I am JSX Heading</h1>;
// const HeadingComponent = () => (
//   <div id="container">
//     <h1>{aman}</h1>
//     <TitleHeading />
//     <h1 id="jsx">I am from the functional component</h1>
//   </div>
// );
// const aman = "amkjbjhdsvbhjdsbfhdsbfdsbfdshasdhan";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// Assignment 1

// const element = (
//     <div className="element">
//         <h1>I am from element h1</h1>
//         <h2>I am from element h2</h2>
//         <h3>I am from element h3</h3>
//     </div>
// )
// const heading1 = 'h1 from function';
// const heading2 = 'h2 from function';
// const heading3 = 'h3 from function';
// const Heading = () => (
//     <div className="title">
//         {element}
//         <h1>I am {heading1}</h1>
//         <h2>I am {heading2}</h2>
//         <h3>I am {heading3}</h3>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading></Heading>)

const HeadingComponent = () => (
    <div className="header">
        <img className="brand" src="https://cryptologos.cc/logos/anyswap-any-logo.png" alt="logo.png"></img>
        <input type="seach" placeholder="search.."></input>
        <button type="submit">Submit</button>
        <img className="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY4aT6JxU4kE9F6X8YQ30MGiFd89dh10Wj5ozmejxYA&s" alt="user.logo"></img>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)