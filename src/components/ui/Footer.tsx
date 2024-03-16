import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-4 px-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Pritam kumar ram. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
