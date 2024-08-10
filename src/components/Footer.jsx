import React from "react";

function Footer() {
  const emailID = "bodhavyasa@gmail.com";
  return (
    <div className="mt-16 flex flex-col justify-center gap-1 rounded-md bg-gray-200 p-10">
      <p className="text-center">
        Need help? Email at{" "}
        <a href={`mailto:${emailID}`}>bodhavyasa@gmail.com</a>
      </p>
      <p className="text-center">Copyright&copy; 2024 BodhaVyasa</p>
    </div>
  );
}

export default Footer;
