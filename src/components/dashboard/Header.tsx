
import React from "react";

function Header() {
  return (
    <div className="bg-black flex justify-between items-center p-4">
      {/* Left Section: Logo and Text */}
      <div className="flex items-center">
        <img 
          src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" 
          alt="Logo" 
          className="h-10 w-10 mr-4"
        />
        <div className="text-white text-lg font-semibold">Tailwind CSS</div>
      </div>

      {/* Right Section: Four Text Items */}
      <div className="flex space-x-8 text-white text-lg font-medium">
        <div>Docs</div>
        <div>Components</div>
        <div>Blog</div>
        <div>Showcase</div>
      </div>
    </div>
  );
}

export default Header;