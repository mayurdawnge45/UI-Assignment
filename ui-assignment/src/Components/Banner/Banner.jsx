import React from "react";
import BannerImg from "../../Assets/images/banner-img.png";
import "./Banner.scss";
import faceBook from "../../Assets/images/svg/facebook.svg";
import twitter from "../../Assets/images/svg/twitter.svg";
import insta from "../../Assets/images/svg/insta.svg";
import youtub from "../../Assets/images/svg/youtub.svg";
const Banner = () => {
  return (
    <>
      <div className="banner_section">
        <img src={BannerImg} alt=""  />
        <div className="banner_title">
          <h1>
            st mary's <br />
            &nbsp; orthodox church
          </h1>
          <div className="banner_content_box">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              alias mollitia eveniet sed excepturi commodi molestiae nobis ipsa
              illum soluta!
            </p>
            <button className="donate_btn">Donate Now</button>
          </div>
          <div className="social_icon">
            <img src={faceBook} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={youtub} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
