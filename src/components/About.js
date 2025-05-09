import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | About Me ";
    bounce();
  }, []);

  const svgBaseUrl = "https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code";
  const svgNumber = Math.floor(Math.random() * 4) + 1;
  const svgUrl = `${svgBaseUrl}${svgNumber}.svg`;

  const experienceList = [
    { role: "Founder, Hypnosys", period: "July 2020 - Present" },
    { role: "Founder, Codash", period: "Dec 2021 - Present" },
    { role: "Founder, Beyond Limits Fitness", period: "June 2024 - Present" },
    { role: "Founder, Vom Publications", period: "Dec 2023 - Present" },
    { role: "OSD, Google", period: "Oct 2022 - Nov 2022" },
    { role: "Campus Evangelist, Codedamn", period: "Feb 2022 - Aug 2022" },
    { role: "Open Source Contributor, QuestDB", period: "Oct 2022 - Apr 2023" },
    { role: "Open Source Contributor, Symbl.ai", period: "Oct 2021 - Aug 2022" },
    { role: "Open Source Contributor, Appsmith", period: "Oct 2021 - Feb 2022" },
    { role: "Information Technology Consultant, Bite n Shakes", period: "Oct 2021 - Dec 2021" },
    { role: "Web Developer turned CTO, Yumhungry", period: "Nov 2020 - Apr 2021" },
    { role: "Full-Stack Web Developer, Talkieto", period: "Dec 2020 - Apr 2021" },
    { role: "Video Editor and Content Manager, Youtube Channel", period: "Mar 2020 - Dec 2020" },
  ];

  const renderExperience = experienceList.map((exp, index) => (
    <div key={index}>
      <strong>{exp.role}</strong> &nbsp;[{exp.period}]
    </div>
  ));

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Vanshaj, a computer engineer."
            className="blast-root"
          >
            {["A", "b", "o", "u", "t", "m", "e"].map((letter, idx) => (
              <span key={idx} className="blast" style={{ color: "#23ffde" }}>
                {letter}
              </span>
            ))}
          </h1>
          <p align="left">
            A hustler with knowledge of <strong>programming</strong> and{" "}
            <strong>computer applications</strong>. 👨‍💻
            <br />
            <br />
            Loves to work on problems, quick learner, debugger, and a fitness lover,
            an avid reader, and a person who loves gaming more than NextJs.
            <br />
            <br />
            My Experience:
            <br />
            {renderExperience}
            <br />
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            Follow me on{" "}
            <a
              href="https://instagram.com/VanshajPoonia/"
              className="link-color"
            >
              Instagram
            </a>{" "}
            to know more or just{" "}
            <a href="/contact" className="link-color">
              contact
            </a>{" "}
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
        <img alt="Illustration of code-related graphics" src={svgUrl} />
      </div>
    </>
  );
}


// import React, { useEffect } from "react";
// import bounce from "../script/bounce";

// export default function About() {
//   useEffect(() => {
//     document.title = "Vanshaj Poonia | About Me ";

//     bounce();
//   }, []);

//   return (
//     <>
//       <div className="container home-page">
//         <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
//         <div className="text-zone">
//           <h1
//             aria-label=" Hi, I’m Vanshaj,a computer engineer."
//             className="blast-root"
//           >
//             <span className="blast" style={{ color: "#23ffde" }}>
//               A
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               b
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               o
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               u
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               t&nbsp;
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               m
//             </span>
//             <span className="blast" style={{ color: "#23ffde" }}>
//               e
//             </span>
//           </h1>
//           <p align="LEFT">
//             A hustler with knowledge of{" "}
//             <strong>programming</strong> and&nbsp;
//             <strong>computer applications</strong> . 👨‍💻
//             <br />
//             <br />
//             Loves to work on problems, quick learner,
//             debugger and,
//             <br />
//             a fitness lover, an avid reader and a person who loves gaming more than NextJs.
//             <br />
//             <br />
//             My Experience :<br />
//             - Founder, Hypnosys &#91;July 2020 - Present&#93; <br />
//             - Founder, Codash &#91;Dec 2021 - Present&#93; <br />
//             - Founder, Beyond Limits Fitness &#91;June 2024 - Present&#93; <br />
//             - Founder, Vom Publications &#91;Dec 2023 - Present&#93; <br />
//             - OSD, Google &#91;Oct 2022 - Nov 2022&#93; <br />
//             - Campus Evangelist, Codedamn &#91;Feb 2022 - Aug 2022&#93; <br />
//             - Open Source Contributor, QuestDB &#91;Oct 2022 - Apr 2023&#93; <br />
//             - Open Source Contributor, Symbl.ai &#91;Oct 2021 - Aug 2022&#93; <br />
//             - Open Source Contributor, Appsmith &#91;Oct 2021 - Feb 2022&#93; <br />
//             - Information Technology Consultant, Bite n Shakes &#91;Oct 2021 - Dec 2021&#93; <br />
//             - Web Developer turned CTO, Yumhungry &#91;Nov 2020 - Apr 2021&#93; <br />
//             - Full-Stack Web Developer, Talkieto &#91;Dec 2020 - Apr 2021&#93; <br />
//             - Video Editor and Content Manager, Youtube Channel &#91;Mar 2020 - Dec 2020 &#93; <br />
//             <br />
//             {/* <br /> */}
//             {/* <br /> */}
//             Interested in the development spectrum and actively looking for an
//             opportunity in the field of Software Engineering.
//             <br />
//             {/* <br /> */}
//             Follow me on&nbsp;
//             <a
//               href="https://instagram.com/VanshajPoonia/"
//               style={{ color: "#23ffde" }}
//             >
//               Instagram&nbsp;
//             </a>
//             to know more or just&nbsp;
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
