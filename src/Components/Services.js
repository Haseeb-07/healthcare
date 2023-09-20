import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../Assets/cardiology.jpg'
import image1 from '../Assets/nephrology.jpg'
import image2 from '../Assets/pedriatics.jpg'
import image3 from '../Assets/hematology.jpg'
import image4 from '../Assets/neurology.jpg'
import image5 from '../Assets/ent.jpg'
import image6 from '../Assets/pulmonolgy.jpg'
import image7 from '../Assets/infectious.png'
import image8 from '../Assets/radiology.jpg'
import './Services.css'
const Services = () => {
  return (
    <section id="services">
    <div className="services-container">
      <Container>
        <div className='ourservice'>
        <h2>OUR SERVICES</h2>
        </div>
        
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Cardiology</h3>
              <p>
                Our expert cardiologists provide comprehensive heart care services, including diagnostics, treatment, and prevention.
              </p>
              <img src={image} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Neurology</h3>
              <p>
                Our neurology department offers advanced treatments for neurological conditions, ensuring the best care for our patients.
              </p>
              <img src={image4} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Pediatrics</h3>
              <p>
                We specialize in pediatric care, with a dedicated team of doctors and nurses who ensure the well-being of our young patients.
              </p>
              <img src={image2} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Hematology</h3>
              <p>
                Our Hematology experts provide comprehensive heart care services, including diagnostics, treatment, and prevention.
              </p>
              <img src={image3} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Nephrology</h3>
              <p>
                Our Nephrology department offers advanced treatments for neurological conditions, ensuring the best care for our patients.
              </p>
              <img src={image1} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Otolaryngology</h3>
              <p>
                We specialize in Otolaryngology care, with a dedicated team of doctors and nurses who ensure the well-being of our young patients.
              </p>
              <img src={image5} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Pulmonology</h3>
              <p>
                Our Pulmonology experts  provide comprehensive heart care services, including diagnostics, treatment, and prevention.
              </p>
              <img src={image6} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Infectious Disease</h3>
              <p>
                Our Infectious Disease department offers advanced treatments for neurological conditions, ensuring the best care.
              </p>
              <img src={image7} alt="" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="service-item">
              <h3>Radiology</h3>
              <p>
                We specialize in Radiology care, with a dedicated team of doctors and nurses who ensure the well-being of our young patients.
              </p>
              <img src={image8} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default Services;
