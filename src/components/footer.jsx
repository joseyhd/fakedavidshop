import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} DavidShop. All rights reserved.</p>
    </footer>
  );
};
