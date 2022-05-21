import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Picture() {
  return (
    <div className="main">
      <img className="imageee" src="./profileee.jpeg" alt="text" />
      <h1 className="Name">Bharath</h1>
      <h3 className="designation">Front end developer</h3>
    </div>
  );
}
function Email() {
  return (
    <div className="email">
      <img className="emailimage" src="./emailll.png" />

      <h3 className="emailtext">Email</h3>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
      <ul>
        <li>Hello connections.This is Bharath from Coimbatore</li>
        <li>Working as a knowledge manager in XXX company</li>
      </ul>
    </div>
  );
}
function Interest() {
  return (
    <div>
      <h2>Interest</h2>
      <ul>
        <li>Web development</li>
        <li>Psychology</li>
        <li>Technologies</li>
        <br />
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <div className="footerr">
      <img className="image" src="./linkedin.png" />
      <img className="image" src="./twitter.jpg" />
      <img className="image" src="./insta.png" />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Picture />
    <Email />
    <About />
    <Interest />
    <Footer />
  </div>,
  document.getElementById("root")
);
