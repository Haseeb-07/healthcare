import React from 'react';
import image from '../Assets/medicalback.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import hospital from '../Assets/hospital2.png'
import './Home.css';

export default function Home() {
  return (
   <section id="home">
   <div className="home-container" style={{ backgroundImage: `url(${image})` }}>
   <Container className='custom-container'>
  <Row className='custom-row'>
    <Col xs={12} md={6} className='custom-col'>
      <div className='home-heading'>
        <h3>Your Wellness, Our Priority.</h3>
      </div>
    </Col>
    <Col xs={12} md={6} className='custom-col'>
      <img src={hospital} alt="" className='img-fluid' />
    </Col>
  </Row>
</Container>
</div>
    </section>
  );
}
