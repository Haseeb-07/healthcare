import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hospital from '../Assets/hospital.jpg';
import './About.css'
export default function About() {
  return (
    <section id="about">
    <div className='aboutusdiv'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h3>About Us</h3>
            <p className="text-justify">
              Our hospital is privileged to have a diverse team of experienced and compassionate doctors. With over 100+ doctors on staff, each specializing in various medical fields, we offer a wide range of expertise to cater to the unique needs of our patients. Our medical staff includes esteemed specialists in cardiology, neurology, pediatrics, oncology, and many other disciplines. Their dedication to staying at the forefront of medical advancements ensures that our patients receive the best possible care.
              As we look ahead, we remain steadfast in our dedication to excellence. Wellness will continue to evolve, grow, and adapt to the changing healthcare landscape, always with our patients' well-being at the forefront. We are excited about the opportunities to expand our services and make a positive impact on even more lives in the future.

</p>
<p className="text-justify">Thank you for entrusting us with your healthcare needs. We are honored to serve our community and look forward to being your healthcare partner for years to come.</p>
          </Col>
          <Col xs={12} md={6}>
            <img src={hospital} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
}
