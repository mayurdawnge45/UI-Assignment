import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./HomeCards.scss";
import CardImg1 from "../../Assets/images/card1.png";
import CardImg2 from "../../Assets/images/card2.png";
import CardImg3 from "../../Assets/images/card3.png";
const HomeCards = () => {
  const HomeCard = [
    {
      CardTitle: "Sunday School",
      CardImg: CardImg1,
      CardText:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      CardTitle: "youth group",
      CardImg: CardImg2,
      CardText:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      CardTitle: "bible studies",
      CardImg: CardImg3,
      CardText:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  return (
    <>
      <section className="card_section">
        <Container>
          <div className="card_box">
            {HomeCard.map((HomeCards, k) => (
              <Card>
                <Card.Body>
                  <Card.Title>{HomeCards.CardTitle}</Card.Title>
                  <img src={HomeCards.CardImg} alt="" width="100%" />
                  <Card.Text>{HomeCards.CardText}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeCards;
