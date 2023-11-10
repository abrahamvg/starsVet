import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="bg-teal shadow-sm h-16 p-4 grid justify-between navbar fixed w-full top-0 left-0 z-10">
      <div className="logo">
        <img className="inline" src={require(`../images/logo/logo192.png`)} alt="logo" />
        <a href="/">Stars Vet Animal & Bird Clinic</a>
      </div>

      <div className="hamburger">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul class="menuItem">
          <li><a href="#">Species We Treat</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="https://maps.app.goo.gl/hs7gXQZtQrCjbMJ3A" target="_blank">Location</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="nav-items flex-row gap-10">
        <a className="nav-item nav-item-arrow" id="species">Species We Treat</a>
        <a className="nav-item nav-item-arrow" id="services">Services</a>
        <a className="nav-item" id="location" href="https://maps.app.goo.gl/hs7gXQZtQrCjbMJ3A" target="_blank">Location</a>
        <a className="nav-item" id="about">About Us</a>
        <a className="nav-item" id="contact">Contact Us</a>
      </div>
    </div>
  );
}
