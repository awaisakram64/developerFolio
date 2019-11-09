import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">Hi 👋 I'm M Awais</h1>
            <p className="greeting-text-p subTitle">
              A Data Science and Machine Learning fanatic 🚀 having experience of building Machine Learning Model and Dashboards with Python, R Shiny and other cool libraries and frameworks.
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href="https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing" />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="guy sitting on table" src={require("../../assests/my_images/busy_guy.png")}></img>
        </div>
      </div>
    </div>
  );
}
