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
            aria-label=" Hi, I’m Vanshaj,web developer."
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
            a fan of "Ben 10" and Gaming.
            <br />
            <br />
            My Experience :<br />
            - Founder, Hypnosys &#91;Present · 2 yrs 7 mos&#93; <br />
            - Founder, Codash &#91;Dec 2021 - Present · 1 yr 1 mo&#93; <br />
            - OSD, Google &#91;Oct 2022 - Nov 2022 · 2 mos&#93; <br />
            - Campus Evangelist, Codedamn &#91;Feb 2022 - Aug 2022 · 7 mos&#93; <br />
            - Open Source Contributor, QuestDB &#91;Oct 2022 - Present&#93; <br />
            - Open Source Contributor, Symbl.ai &#91;Oct 2021 - Aug 2022 · 11 mos&#93; <br />
            - Open Source Contributor, Appsmith &#91;Oct 2021 - Feb 2022 · 5 mos&#93; <br />
            - Information Technology Consultant, Bite n Shakes &#91;Oct 2021 - Dec 2021 · 3 mos&#93; <br />
            - Web Developer turned CTO, Yumhungry &#91;Nov 2020 - Apr 2021 · 6 mos&#93; <br />
            - Full-Stack Web Developer, Talkieto &#91;Dec 2020 - Apr 2021 · 5 mos&#93; <br />
            - Technical Support Specialist, Honest Clinic &#91;Dec 2020 · 1 mo&#93; <br />
            - Video Editor and Content Manager, Youtube Channel &#91;Mar 2020 - Dec 2020 · 10 mos&#93; <br />
            <br />
            {/* <br /> */}
            {/* <br /> */}
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            {/* <br /> */}
            Follow me on&nbsp;
            <a
              href="https://twitter.com/VanshajPoonia/"
              style={{ color: "#23ffde" }}
            >
              Twitter&nbsp;
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
