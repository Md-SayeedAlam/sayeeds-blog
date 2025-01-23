import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <div className="text-center container mx-auto">
        <footer className="footer footer-center  text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Sayeed
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
