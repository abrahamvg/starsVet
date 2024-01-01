import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [visible, setVisible] = useState("hidden")
  return (
    <div className="bg-teal shadow-sm h-16 p-4 grid justify-between navbar fixed w-full top-0 left-0 z-10">
      <div className="logo">
        <img
          className="inline"
          src={require(`../images/logo/logo192.png`)}
          alt="logo"
        />
        <Link to="/">Stars Vet Animal & Bird Clinic</Link>
      </div>

      <div className="hamburger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="menuItem">
          <li>
            <div className="nav-item-mobile" href="#" onClick={()=>{
              visible == "hidden" ? setVisible("block"): setVisible("hidden");
            }}>Species We Treat</div>
            <div className={`inner-nav-species-mobile bg-teal text-center w-full ${visible}`}>
              <NavLink
                className=" block w-full hover:text-green px-2 py-3"
                to="/species/dogs-and-cats"
              >
                Dogs and Cats
              </NavLink>
              <NavLink className=" block w-full hover:text-green px-2 py-3" to="/species/birds">
                Birds
              </NavLink>
              <NavLink className=" block w-full hover:text-green px-2 py-3" to="/species/rabbit">
                Rabbits
              </NavLink>
              <NavLink className=" block w-full hover:text-green px-2 py-3" to="/species/reptile">
                Reptiles
              </NavLink>
              <NavLink className=" block w-full hover:text-green px-2 py-3" to="/species/guineaPig">
                Guinea Pigs
              </NavLink>
              <NavLink className=" block w-full hover:text-green px-2 py-3" to="/species/turtle">
                Turtle
              </NavLink>
            </div>
          </li>
          <li>
            <div className="nav-item-mobile" href="#">Services</div>
          </li>
          <li>
            <div className="nav-item-mobile" href="https://maps.app.goo.gl/hs7gXQZtQrCjbMJ3A" target="_blank">
              Location
            </div>
          </li>
          <li>
            <div className="nav-item-mobile" href="#">About Us</div>
          </li>
          <li>
            <div className="nav-item-mobile" href="#">Contact Us</div>
          </li>
        </ul>
      </div>

      <div className="nav-items flex-row gap-10">
        <div className="relative nav-item nav-item-arrow species" id="species">
          Species We Treat
          <div className="inner-nav-species absolute top-6 -translate-x-1/2 left-1/2 bg-teal">
            <NavLink
              className="block w-60 px-2 py-3"
              to="/species/dogs-and-cats"
            >
              Dogs and Cats
            </NavLink>
            <NavLink className="block w-60 px-2 py-3" to="/species/birds">
              Birds
            </NavLink>
            <NavLink className="block w-60 px-2 py-3" to="/species/rabbit">
              Rabbits
            </NavLink>
            <NavLink className="block w-60 px-2 py-3" to="/species/reptile">
              Reptiles
            </NavLink>
            <NavLink className="block w-60 px-2 py-3" to="/species/guineaPig">
              Guinea Pigs
            </NavLink>
            <NavLink className="block w-60 px-2 py-3" to="/species/turtle">
              Turtle
            </NavLink>
          </div>
        </div>
        <div className="relative nav-item nav-item-arrow" id="services">
          Services
        </div>
        <div
          className="relative nav-item"
          id="location"
          href="https://maps.app.goo.gl/hs7gXQZtQrCjbMJ3A"
          target="_blank"
        >
          Location
        </div>
        <div className="relative nav-item" id="about">
          About Us
        </div>
        <div className="relative nav-item" id="contact">
          Contact Us
        </div>
      </div>
    </div>
  );
}
