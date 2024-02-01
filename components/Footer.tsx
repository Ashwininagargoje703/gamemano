import React from "react";

function Footer() {
  return (
    <footer className="text-white p-8 w-full bg-[#15140f]" >
      <div className="flex flex-col md:flex-row justify-center md:space-x-4">
        <p className="mb-2 md:mb-0">Privacy Notice</p>
        <p className="mb-2 md:mb-0">Terms of Service</p>
        <p className="mb-2 md:mb-0">Cookie Policy</p>
        <p className="mb-2 md:mb-0">Company Information</p>
        <p className="mb-2 md:mb-0">Cookie Preferences</p>
      </div>

      <div className="flex justify-center space-x-4 mt-5">
        <p style={{ color: "rgba(255, 255, 255, 0.70)" }}>
          Copyright © GameQuest, Inc. All rights reserved
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-5">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twit.png" alt="Instagram" className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/fb.png" alt="Facebook" className="h-6 w-6" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/insta.png" alt="YouTube" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
