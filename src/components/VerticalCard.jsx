import React from "react";
import { Card, Button } from "react-bootstrap";

const VerticalCard = (props) => {
  const { image, title, subtitle, subtitleTwo, textBold, text, textBoldTwo, textTwo, buttonText } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt="Card image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {subtitle && (
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        )}
        {subtitleTwo && (
          <Card.Subtitle className="text-muted">
            {subtitleTwo}
          </Card.Subtitle>
        )}
        <Card.Text className="d-flex flex-wrap flex-column" style={{ margin: '0' }}>
        <strong>{textBold}</strong>
          <p style={{ margin: '0' }}>{text}</p>
        </Card.Text>
        <Card.Text>
          <strong>{textBoldTwo}</strong>
          <br />
          {textTwo}
        </Card.Text>
        {buttonText && <Button variant="primary">{buttonText}</Button>}
      </Card.Body>
    </Card>
  );
};

export default VerticalCard;

// Tutorial panggil cardvertical

// <VerticalCard
// image="public/malik.png"
// title="Abdul Malik Matoha"
// subtitle="UI/UX Designer"
// subtitleTwo="5 Years"
// textBold="Alumni"
// text="University of Gorontalo"
// textBoldTwo="Bekerja di"
// textTwo="Bekasi, Jawa Barat"  
// buttonText="LinkedIn"
// />

// <VerticalCard  
// image="public/malik.png"
// title="Acumalaka Acumeleke"
// subtitle="malik"
// text="Lorem ipsum dolor sit amet consectetur. Odio a adipiscing mollis commodo sapien vulputate......."
// />