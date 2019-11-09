import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline" name="html-5">
            <i className="fab fa-python"></i>
          </li>
          <li className="software-skill-inline" name="css3">
            <i className="fab fa-r-project"></i>
          </li>
          <li className="software-skill-inline" name="JavaScript">
            <i className="fab fa-js"></i>
          </li>
          <li className="software-skill-inline" name="reactjs">
            <i className="fab fa-git"></i>
          </li>
          <li className="software-skill-inline" name="nodejs">
            <i className="fab fa-linux"></i>
          </li>
          <li className="software-skill-inline" name="npm">
            <i className="fas fa-database"></i>
          </li>
          <li className="software-skill-inline" name="sql-database">
            <i className="fab fa-aws"></i>
          </li>
          <li className="software-skill-inline" name="aws">
            <i className="fab fa-digital-ocean"></i>
          </li>
          <li className="software-skill-inline" name="firebase">
            <i className="fas fa-fire"></i>
          </li>
          <li className="software-skill-inline" name="python">
            <i className="fa fa-code"></i>
          </li>
          <li className="software-skill-inline" name="docker">
            <i className="fab fa-docker"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
