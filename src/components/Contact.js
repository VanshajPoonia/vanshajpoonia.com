import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bounce from "../script/bounce";

export default function Contact() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Vanshaj Poonia | Contact Me";

    bounce();
  }, []);

  function handleSubmit(e) {
    alert("Your Message is sent!");
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  return (
    <>
      <div className="container home-page" style={{ zoom: "95%" }}>
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Vanshaj,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              C
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              a
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
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
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>

          <div className="contact">
            <iframe
              name="hidden_iframe"
              title="hidden_iframe"
              id="hidden_iframe"
              style={{
                display: "none",
              }}
            ></iframe>
            <form
              className="form"
              action="https://formsubmit.co/vanshajfirebase@gmail.com"
              // action="https://docs.google.com/forms/d/e/1FAIpQLSdEMQkixmFRF-7EbivkHADXQ9kfbpazop6B3zh1YyK8hXLKDQ/viewform?usp=sf_link"
              // action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfw-BZLTTNI3Y9D9LbCBb5b56lpbOokb2P1win1ky8SP5lt8A/formResponse"
              method="post"
              target="hidden_iframe"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="iamvanshajpoonia.vercel.app" />
              <motion.input
                id="name"
                type="text"
                name="entry.649112156"
                placeholder="Name *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.1 }}
              />
              &nbsp;
              <motion.input
                id="email"
                type="email"
                name="entry.1560288382"
                placeholder="Email *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.2 }}
              />
              <br />
              <motion.input
                id="sbj"
                type="text"
                name="entry.1406382583"
                placeholder="Subject (optional)"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.4 }}
              />
              <br />
              <motion.textarea
                id="msg"
                type="text"
                name="entry.728219473"
                placeholder="Message *"
                required={true}
                cols="50"
                rows="10"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.7 }}
              ></motion.textarea>
              <br />
              <motion.input
                id="sub-btn"
                type="submit"
                value="Send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                color: "aliceblue",
                maxWidth: "60%",
                fontSize: "1em",
                margin: "5px 0 5px 2px",
                transform: "translateY(-40px)",
              }}
            >
              Or you can just mail me at ~&nbsp;
              <a
                href="mailto:vanshajfirebase@gmail.com"
                style={{ color: "#23ffde", fontSize: "1.3em" }}
              >
                vanshajfirebase@gmail.com
              </a>
            </motion.p>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>

      <motion.div
        className="mapouter"
        style={{ backgroundColor: "#e2e2e2" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="gmap_canvas">
          <iframe
            title="gmap_canvas"
            id="gmap_canvas"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633470.5169291274!2d76.89342349926463!3d28.705698137363992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1597408824240!5m2!1sen!2sus"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6628404222897!2d77.03168452920342!3d28.610234098901675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d054a1699bf85%3A0x226206e4864dcbb9!2s50%2F1%2C%20Block%20RZ%2C%20Mohit%20Nagar%2C%20Kakrola%2C%20New%20Delhi%2C%20Delhi%20110078!5e0!3m2!1sen!2sin!4v1626428196610!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            scrolling="no"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
