import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function ProfileCard({ name, age, location, followers, likes, photos }) {
  return (
    <Card className="card" style={{ width: '22rem' }}>
      <Row className="mx-auto card-banner">
        <Card.Img src="/images/bg-pattern-card.svg" />
        <Image
          src="/images/image-victor.jpg"
          roundedCircle
          style={{
            border: '4px solid white',
            position: 'relative',
            margin: '-50px 36%'
          }}
        />
      </Row>
      <Card.Body className="mb-0 mt-5">
        <Card.Title className="card-name text-center mb-1">
          <span>{name}</span> {age}
        </Card.Title>
        <Card.Text className="card-location text-center">{location}</Card.Text>
        <hr className="w-100" />
        <Row className="align-items-center mt-4">
          <Col className="text-center">
            <Card.Text className="stats mb-0">{followers}</Card.Text>
            <Card.Text className="stats-text">Followers</Card.Text>
          </Col>
          <Col className="text-center">
            <Card.Text className="stats mb-0">{likes}</Card.Text>
            <Card.Text className="stats-text">Likes</Card.Text>
          </Col>
          <Col className="text-center">
            <Card.Text className="stats mb-0">{photos}</Card.Text>
            <Card.Text className="stats-text">Photos</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
