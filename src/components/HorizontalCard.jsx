import React from "react";
import { Card, Button } from "react-bootstrap";

const HorizontalCard = ({ imgSrc, title, subtitle, description, timeAvailability, }) => {
  return (
    <Card style={{ maxWidth: "40rem" }} className="mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img
            src={imgSrc}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title className="text-primary">{title}</Card.Title>
            <Card.Subtitle className="text-primary fs-6 mb-2">
              {subtitle}
            </Card.Subtitle>
            <Card.Text className="text-muted">{description}</Card.Text>
            <Card.Text>
              <small className="text-muted">
                Tersedia Kembali {timeAvailability}
              </small>
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default HorizontalCard;

/* 
// contoh panggil card :
<ImageCard
    imgSrc="public/malik.png"
    title="Dr. Abdul Malik Matoha"
    subtitle="Spesalis Jomblo"
    description="Stress, Gangguan Kecemasan Berlebihan, Depresi"
    timeAvailability="Tersedia Kembali Sun, 08:00-10:00"
    buttonText="Lanjut Baca"
/> */
