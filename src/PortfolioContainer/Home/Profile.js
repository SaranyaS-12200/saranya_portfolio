import React from "react";
import Typical from "react-typical";

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details ">
          <div className="colz">
            <a href="# ">
            <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/saranya-sandirasegaran/">
            <i class="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/SaranyaS-12200">
            <i class="fa fa-github-square"></i>
            </a>
            <a href="https://codepen.io/SaranyaSandirasegaran">
            <i class="fa-brands fa-codepen"></i>
            </a>
          </div>
          <div className="profile-details-name">
           <span className="primary-text">
             {" "}
             Hello,I'm <span className="highlighted-text">SaranyaS</span>
           </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
{""}
<Typical
  loop={Infinity}
  steps={[
       "Ethusiastic Dev 🟢",
       5000,
       "Full Stack Developer 💻",
       5000,
       "MERN Stack  Dev 😎",
       5000,
       "Full Stack Developer by Profession 🌐",
       5000,
       "React Dev 😎",
       5000,
      ]}/>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href='SaranyaS Resume.pdf' download='SaranyaS Resume.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
