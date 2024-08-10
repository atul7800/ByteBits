import React from "react";

function Contact() {
  const emailID = "bodhavyasa@gmail.com";
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex max-w-[500px] flex-col justify-center gap-5">
        <p className="my-2 text-center">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to connect, feel free to reach out. At ByteBit, we value
          your input and are here to assist with any inquiries you may have.
        </p>
        <div className="my-2 text-center">
          <p>
            Email: <a href={`mailto:${emailID}`}>bodhavyasa@gmail.com</a>
          </p>
        </div>

        <p className="my-2 text-center">
          For support or general questions, please contact us via email or
          connect with us on social media. We look forward to engaging with our
          tech community and providing the best possible experience for our
          readers.
        </p>
      </div>
    </div>
  );
}

export default Contact;
