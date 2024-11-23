import React from "react";

interface ContactMeProps {
  iframeUrl: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ iframeUrl }) => {
  return (
    <div>
      <h2>Contact Me</h2>

      <p>
        If you have any questions, collaboration opportunities, or just want to
        connect, feel free to reach out to me through any of the following
        methods:
      </p>

      <h3>Email:</h3>
      <p>
        You can email me at{" "}
        <a href="mailto:aungkaungmyathtun@gmail.com">
          aungkaungmyathtun@gmail.com
        </a>
      </p>

      <h3>Social Media:</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/aung-kaung-myat-htun"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/your-profile" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/AungKaung-max" target="_blank">
            GitHub
          </a>
        </li>
      </ul>

      <h3>Contact Form:</h3>
      <p>
        Alternatively, you can fill out the form below, and I'll get back to you
        as soon as possible.
      </p>
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          width="100%"
          height="500px"
          title="Contact Form"
        />
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#ff6347",
            fontWeight: "bold",
            padding: "2rem",
            backgroundColor: "#fffae6",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          Coming Soon
        </div>
      )}
    </div>
  );
};

export default ContactMe;
