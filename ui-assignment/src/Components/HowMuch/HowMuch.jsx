import React from "react";
import { Container } from "react-bootstrap";
import HowMuchImg from "../../Assets/images/howmuch.png";
import "./HowMuch.scss";

const HowMuch = () => {
  return (
    <>
      <section className="how_much">
        <div className="img_box">
          <img src={HowMuchImg} alt="" width="100%" />
        </div>
        <Container className="howmuch_container">
          <div className="howmuch_content">
            <h2>
              it's not how much we give , but how much love we put into giving.
            </h2>
            <button className="donate_btn">donate now</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HowMuch;
