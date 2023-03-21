import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
import footerLogo from "../../Assets/images/Group-logo.png";
import { Link } from "react-router-dom";
import faceBook from "../../Assets/images/svg/facebook.svg";
import twitter from "../../Assets/images/svg/twitter.svg";
import insta from "../../Assets/images/svg/insta.svg";
import youtub from "../../Assets/images/svg/youtub.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="space">
          <Container>
            <div className="footer_inner_box">
              <div className="footer_logo_box">
                <img src={footerLogo} alt="" width="100px" />
                <h4>st mary's orthodox church</h4>
              </div>
              <div className="footer_contact_box">
                <h4>contact</h4>
                <div className="call">
                  <a href="tel:98654578564">98654578564</a>
                </div>
                <div className="email">
                  <a href="mailto:email@mail.com">email@mail.com</a>
                </div>
                <div>200 cisrby Way, Raseville ca 6958 , united state</div>
              </div>
              <div className="footer_navgate_box">
                <h4>Navigate</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/event">Event</Link>
                  </li>
                  <li>
                    <Link to="/media">Media</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="footer_socialmedia_box">
                <h4>Socials</h4>
                <div className="social_icon">
                  <img src={faceBook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={insta} alt="" />
                  <img src={youtub} alt="" />
                </div>
                <button className="donate_btn">donata now</button>
              </div>
            </div>
          </Container>
        </div>
        <Container className="bottom_content">
          <div className="since">@st Mary's Orthodox Church Since,2023</div>
          <div className="since">Orthodox Church</div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
