import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline" name="Python">
            <i className="fab fa-python" title = 'Python'></i>
          </li>
          <li className="software-skill-inline" name="R">
            <i className="fab fa-r-project" title = 'R'></i>
          </li>
          <li className="software-skill-inline" name="JavaScript">
            <i className="icon-javascript" title="JavaScript" ></i>
          </li>
          <li className="software-skill-inline" name="Linux">
            <i className="fab fa-linux" title = 'Linux'></i>
          </li>
          <li className="software-skill-inline" name="git">
            <i className="icon-git" title = 'Git'></i>
          </li>
          <li className="software-skill-inline" name="MS Sql">
            <i className="icon-mssql" title = 'Microsoft SQL'></i>
          </li>
          <li className="software-skill-inline" name="MySQL">
            <i className="icon-mysql" title = 'MySQL'></i>
          </li>
          <li className="software-skill-inline" name="MongoDB">
            <i className="icon-mongodb" title = 'MongoDB'></i>
          </li>
          <li className="software-skill-inline" name="aws">
            <i className="fab fa-aws"></i>
          </li>
          <li className="software-skill-inline" name="Digital Ocean">
            <i className="fab fa-digital-ocean"></i>
          </li>          
          <li className="software-skill-inline" name="nginx">
            <i className="icon-nginx-alt" title = 'Nginx'></i>
          </li>
          <li className="software-skill-inline" name="docker">
            <i className="icon-docker" title = 'Docker'></i>
          </li>
          <li className="software-skill-inline" name="hadoop">
            <i className="icon-hadoop" title = 'Hadoop'></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
