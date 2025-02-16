import React from "react";
import "./Footer.css";

const Footer = () => {
  const buttonLabels = [
    "Home (Sales)",
    "Home V1",
    "Home V2",
    "Home V3",
    "About",
    "Team members",
    "Team single",
    "Contact V1",
    "Contact V2",
    "Contact V3",
    "Blog V1",
    "Blog V2",
    "Blog V3",
    "Blog posts",
    "Blog category",
    "Services",
    "Service single",
    "Products",
    "Product single",
    "Pricing",
    "Pricing single",
    "Careers",
    "Career single",
    "Customer testimonials",
    "Case studies",
    "Case study single",
    "Policy and regulations",
    "Coming soon",
    "Start here",
    "Style guide",
    "Password protected",
    "404 not found",
    "Licenses",
    "Changelog",
  ];

  return (
    <footer className="footer">
      <div>
        <div className="footer-section">
          <p>Switch to solar today! →</p>
        </div>
        <div>
          <div className="footer-bottom">
            <button>Pages</button>
            <button>Utility Pages</button>
          </div>
            <div className="footer-section-second ">
              {buttonLabels.map((label, index) => (
                <button key={index}>{label}</button>
              ))}
            </div>
          <div className="footer-bottom">
            <p style={{ color: 'green' }}>ENERGY X</p>
            <p>Copyright © Energy X | Designed by BRIX Templates - Powered by Webflow</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
