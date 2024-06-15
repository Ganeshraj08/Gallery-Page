import logo from "../assets/images/photo3.jpeg";

import mobile_menu from "../assets/images/menu-icon.png";
import close_icon from "../assets/images/close-icon.jpeg";
import React, { useState, useRef } from "react";
import "../components/Form.css"; //
import "./Navbar.css";

const Navbar = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    grade: "",
    PhoneNumber: "",
    emailId: "",
    address: "",
  });

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log(formData);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowForm(false);
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="https://open-school-project.vercel.app/">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          {mobileMenu ? (
            <img
              src={close_icon}
              alt="close icon"
              className="menu"
              onClick={toggleMobileMenu}
            />
          ) : (
            <img
              src={mobile_menu}
              alt="menu icon"
              className="menu"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <ul id="ani" className={mobileMenu ? "mobile-view" : "navbar-links"}>
          <li>
            <a href="https://open-school-project.vercel.app/">HOME</a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/academics">
              ACADEMICS
            </a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/admissions">
              ADMISSION
            </a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/student-life">
              STUDENT LIFE
            </a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/services">
              SERVICES
            </a>
          </li>
          <li>
            {/* <Link to="/gallery">GALLERY</Link> */}
            <a href="https://open-school-gallery.vercel.app/"> GALLERY</a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/about">ABOUT US</a>
          </li>
          <li>
            <a href="https://open-school-project.vercel.app/contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
