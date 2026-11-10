import emailjs from "@emailjs/browser";
import { useState } from "react";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(serviceId && templateId && publicKey);

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      setStatus("This contact form has not been configured yet. Please use Facebook instead.");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, { publicKey });
      e.currentTarget.reset();
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus(`Message failed: ${error?.text || "Please check your EmailJS service and template settings, then try again."}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-buttons">

          <a
            href="https://www.facebook.com/Pockymon.29"
            target="_blank"
            rel="noreferrer"
            className="contact-btn facebook"
          >
            <span>f</span>
            Follow on Facebook
          </a>

        </div>

        <form className="contact-form" onSubmit={sendEmail}>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="contact-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          <p className="contact-status" role="status" aria-live="polite">
            {status}
          </p>

        </form>

      </div>
    </section>
  );
}

export default Contact;
