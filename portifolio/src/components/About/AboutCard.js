import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felipe Moreira </span>
            from <span className="purple"> Belo Horizonte, Brazil.</span>
            <br />I have 9 years of experience in the Technology area, working mainly in the information security sector, cyber threat analysis, intrusion testing, vulnerability analysis, defensive and offensive security
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The one who asks is a fool for five minutes, but the one who doesn't ask remains a fool forever."{" "}
          </p>
          <footer className="blockquote-footer">Proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
