import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div id="nav-bar">
        <a href="https://iamvanshajpoonia.vercel.app">
          <img
            className="logo"
            src="https://avatars.githubusercontent.com/u/74147463?v=4"
            alt="logo"
          />
        </a>

        <nav>
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            className={({ isActive }) => (isActive ? "link active-nav" : "link")}
            end
          >
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/about"}
            className={({ isActive }) => (isActive ? "link active-nav" : "link")}
          >
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/skills"}
            className={({ isActive }) => (isActive ? "link active-nav" : "link")}
          >
            <i className="fas fa-cogs fa-2x"></i>
            <div className="overlay">
              <div className="text">SKILLS</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/work"}
            className={({ isActive }) => (isActive ? "link active-nav" : "link")}
          >
            <i className="fas fa-eye fa-2x"></i>
            <div className="overlay">
              <div className="text">MY WORK</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/contact"}
            className={({ isActive }) => (isActive ? "link active-nav" : "link")}
          >
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/vanshajpoonia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/VanshajPoonia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <a
        className="bkmrk"
        href="https://drive.google.com/file/d/1FKmqeAHw8_DMb3b9UIlf3HBeiPFqzvo0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blogdark.png"
          alt="Resume"
        />
        <span className="folded-corner"></span>
      </a>
    </>
  );
}
