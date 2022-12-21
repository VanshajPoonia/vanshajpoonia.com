import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | Skills ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Vanshaj,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development and App development.
            <br />
            <br />
            Main Tech: &nbsp;&nbsp;{" "}
            <b>
              Next.js &nbsp;|&nbsp; React &nbsp;|&nbsp; Typescript &nbsp;|&nbsp;
              JavaScript &nbsp;|&nbsp; Nodejs |&nbsp; TailwindCSS
            </b>
            <br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs + NextJs , VueJs, Redux
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; TailwindCSS , ChakraUI , MaterialUI ,
            Bootstrap, Scss
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express , NestJs , GraphQL, php
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; MongoDB, Sanity, Redis, MySQL
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Solidity, Rust
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; AWS , DigitalOcean , Firebase , Supabase, Heroku, Railway
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Docker, Kubernetes, Figma, Vercel
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp;  C/C++, Java, Python, Django (Python), Ruby On Rails
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; React Native, Dart + Flutter
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; OpenCV , Image Processing
            <br />
            
            {/* &nbsp;&nbsp; • &nbsp;&nbsp; Data Science + Web Scraping + IT
            Automation */}
            {/* <br /> */}
            &nbsp;&nbsp; • &nbsp;&nbsp; Blender + Unity3D
            <br />
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/vanshajpoonia/"
              style={{ color: "#23ffde" }}
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${
            Math.floor(Math.random() * 4) + 1
          }.svg`}
        />
      </div>
    </>
  );
}
