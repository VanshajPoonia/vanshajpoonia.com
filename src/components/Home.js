import React, { useEffect } from "react";

import Guitar from "./Guitar.js";
import bounce from "../script/bounce";
import guitarAnim from "../script/guitarAnim";

export default function Home() {
  useEffect(() => {
    document.title = "Vanshaj Poonia | Full Stack Developer | Game Developer";

    bounce();
    guitarAnim();

    const s = document.querySelector(".Slast");

    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";

    return () => {
      s.style.opacity = 0;
      s.style.transform = "rotate(0deg)";
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Vanshaj, a full-stack and game developer."
            className="blast-root"
          >
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m&nbsp;</span>
            <span className="Slast">V</span>
            <span className="blast">a</span>
            <span className="blast">n</span>
            <span className="blast">s</span>
            <span className="blast">h</span>
            <span className="blast">a</span>
            <span className="blast">j&nbsp;</span>
            <span className="blast">P</span>
            <span className="blast">o</span>
            <span className="blast">o</span>
            <span className="blast">n</span>
            <span className="blast">i</span>
            <span className="blast" style={{ paddingLeft: "3px" }}>
              a
            </span>
            {/* <span className="blast">j</span>
            <span className="blast">e</span>
            <span className="blast">t</span> */}
            <span className="blast">,</span>
            <br />
            <span className="blast">a&nbsp;</span>
            <span className="blast">w</span>
            <span className="blast">e</span>
            <span className="blast">b&nbsp;</span>
            <span className="blast">d</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">p</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
            <span className="blast">.</span>
          </h1>
          <h2>Full Stack Developer / App Developer / Web 3.0 Developer / Game Developer / Freelancer</h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/vanshajpoonia/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://github.com/VanshajPoonia/">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://twitter.com/VanshajPoonia/">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://vanshaj-poonia.itch.io/">
              <i className="fab fa-itch-io fa-3x"></i>
            </a>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <Guitar className="guitarSvg" />
        <audio id="audio-1">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-1.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-2">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-2.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-3">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-3.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-4">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-4.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-5">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-5.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-6">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-6.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-7">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-7.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-8">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-8.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-9">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-9.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-10">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-10.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-11">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-11.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-12">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-12.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
      </div>
    </>
  );
}
