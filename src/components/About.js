import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | About Me ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Vanshaj,a computer engineer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            A hustler with knowledge of{" "}
            <strong>programming</strong> and&nbsp;
            <strong>computer applications</strong> . 👨‍💻
            <br />
            <br />
            Loves to work on problems, quick learner,
            debugger and,
            <br />
            a fitness lover, an avid reader and a person who loves gaming more than NextJs.
            <br />
            <br />
            My Experience :<br />
            - Founder, Hypnosys &#91;July 2020 - Present · 4 yrs 11 mos&#93; <br />
            - Technical Lead, KreativVantage &#91;Mar 2025 - Present · 3 mos&#93; <br />
            - Co-Founder, Muscle Mesh &#91;Jan 2025 - Present · 5 mos&#93; <br />
            - Co-Founder, Everessance &#91;Dec 2024 - Present · 6 mos&#93; <br />
            - Content Editor, Inkverra Publication &#91;Aug 2023 - Present · 1 yr 10 mos&#93; <br />
            - Founder, Codash &#91;Dec 2021 - Present · 3 yr 6 mos&#93; <br />
            - Podcast Host, Data Drip Podcast &#91;Oct 2024 - May 2025 · 8 mos&#93; <br />
            - Full stack Developer, Novaquark Labs &#91;Sep 2024 - Mar 2025 · 7 mos&#93; <br />
            - Full stack Intern, Novaquark Labs &#91;Jan 2024 - Sep 2024 · 4 mos&#93; <br />
            - Systems Engineer, Zenquanta AI &#91;Apr 2024 - Jan 2025 · 10 mos&#93; <br />
            - Chief Operating Officer, Brisk Media &#91;Feb 2023 - Present · 1 yr 8 mos&#93; <br />
            - Senior Software Developer, Bitrelay Systems &#91;Mar 2023 - Apr 2024 · 1 yr 2 mos&#93; <br />
            - Junior Software Developer, Bitrelay Systems &#91;Mar 2022 - Feb  2023 · 1 yr&#93; <br />
            - Open Source Contributor, QuestDB &#91;Oct 2022 - Apr 2023 · 7 mos&#93; <br />
            - OSD, Google &#91;Oct 2022 - Nov 2022 · 2 mos&#93; <br />
            - Campus Evangelist, Codedamn &#91;Feb 2022 - Aug 2022 · 7 mos&#93; <br />
            - Open Source Contributor, Symbl.ai &#91;Oct 2021 - Aug 2022 · 11 mos&#93; <br />
            - Open Source Contributor, Appsmith &#91;Oct 2021 - Apr 2022 · 7 mos&#93; <br />
            - Technical Support Specialist, Bite n Shakes &#91;Oct 2021 - Dec 2021 · 3 mos&#93; <br />
            - Full-Stack Web Developer, Talkieto &#91;Dec 2020 - Apr 2021 · 5 mos&#93; <br />
            - Technical Support Specialist, Honest Clinic  &#91;Dec 2020 - Apr 2021 · 5 mos&#93; <br />
            - Backend Developer, Yumhungry &#91;Nov 2020 - Dec 2021 · 2 mos&#93; <br />
            - Video Editor and Content Manager, Kayla Codes &#91;Mar 2020 - Dec 2020 · 10 mos&#93; <br />
            <br />
            {/* <br /> */}
            {/* <br /> */}
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            {/* <br /> */}
            Follow me on&nbsp;
            <a
              href="https://instagram.com/VanshajPoonia/"
              style={{ color: "#23ffde" }}
            >
              Instagram&nbsp;
            </a>
            to know more or just&nbsp;
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
