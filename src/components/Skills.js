import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | Skills";
    
    // Update meta description for better SEO
    document.querySelector('meta[name="description"]').setAttribute('content', 'Skills and technologies expertise of Vanshaj Poonia.');
    
    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label="Hi, I’m Vanshaj, web developer."
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
          <p align="left">
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
            <div className="skills-list">
              • ReactJs + NextJs, VueJs, Redux
            </div>
            <div className="skills-list">
              • TailwindCSS, ChakraUI, MaterialUI, Bootstrap, Scss
            </div>
            <div className="skills-list">
              • NodeJs, Express, NestJs, GraphQL, PHP
            </div>
            <div className="skills-list">
              • MongoDB, Sanity, Redis, MySQL
            </div>
            <div className="skills-list">
              • Solidity, Rust
            </div>
            <div className="skills-list">
              • AWS, DigitalOcean, Firebase, Supabase, Heroku, Railway
            </div>
            <div className="skills-list">
              • Docker, Kubernetes, Figma, Vercel
            </div>
            <div className="skills-list">
              • C/C++, Java, Python, Django (Python), Ruby On Rails
            </div>
            <div className="skills-list">
              • React Native, Dart + Flutter
            </div>
            <div className="skills-list">
              • OpenCV, Image Processing
            </div>
            <div className="skills-list">
              • Blender + Unity3D
            </div>
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/vanshajpoonia/"
              style={{ color: "#23ffde" }}
              aria-label="Visit Vanshaj Poonia's LinkedIn profile"
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a
              href="/contact"
              style={{ color: "#23ffde" }}
              aria-label="Contact Vanshaj Poonia"
            >
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

// import React, { useEffect } from "react";
// import bounce from "../script/bounce";

// export default function Skills() {
//   useEffect(() => {
//     document.title = "Vanshaj Poonia | Skills ";

//     bounce();
//   }, []);

//   return (
//     <>
//       <div className="container home-page">
//         <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
//         <div className="text-zone">
//           <h1
//             aria-label=" Hi, I’m Vanshaj,web developer."
//             className="blast-root"
//           >
//             <span className="blast" style={{ color: "#23ffde" }}>
//               Skills&nbsp;
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               &nbsp;
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               Experience
//             </span>
//           </h1>
//           <p align="LEFT">
//             The main area of my expertise is Web development and App development.
//             <br />
//             <br />
//             Main Tech: &nbsp;&nbsp;{" "}
//             <b>
//               Next.js &nbsp;|&nbsp; React &nbsp;|&nbsp; Typescript &nbsp;|&nbsp;
//               JavaScript &nbsp;|&nbsp; Nodejs |&nbsp; TailwindCSS
//             </b>
//             <br />
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs + NextJs , VueJs, Redux
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; TailwindCSS , ChakraUI , MaterialUI ,
//             Bootstrap, Scss
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express , NestJs , GraphQL, php
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; MongoDB, Sanity, Redis, MySQL
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; Solidity, Rust
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; AWS , DigitalOcean , Firebase , Supabase, Heroku, Railway
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; Docker, Kubernetes, Figma, Vercel
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp;  C/C++, Java, Python, Django (Python), Ruby On Rails
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; React Native, Dart + Flutter
//             <br />
//             &nbsp;&nbsp; • &nbsp;&nbsp; OpenCV , Image Processing
//             <br />
            
//             {/* &nbsp;&nbsp; • &nbsp;&nbsp; Data Science + Web Scraping + IT
//             Automation */}
//             {/* <br /> */}
//             &nbsp;&nbsp; • &nbsp;&nbsp; Blender + Unity3D
//             <br />
//             <br />
//             <br />
//             Visit my&nbsp;
//             <a
//               href="https://www.linkedin.com/in/vanshajpoonia/"
//               style={{ color: "#23ffde" }}
//             >
//               LinkedIn&nbsp;
//             </a>
//             profile for more details or just&nbsp;
//             <a href="/contact" style={{ color: "#23ffde" }}>
//               contact&nbsp;
//             </a>
//             me.
//           </p>
//         </div>

//         <span className="tags bottom-tags" style={{ bottom: "10px" }}>
//           &nbsp;&nbsp;&nbsp;&lt;/body&gt;
//           <br />
//           &lt;/html&gt;
//         </span>
//       </div>
//       <div id="mysvg">
//         <img
//           alt="hacker"
//           src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${
//             Math.floor(Math.random() * 4) + 1
//           }.svg`}
//         />
//       </div>
//     </>
//   );
// }
