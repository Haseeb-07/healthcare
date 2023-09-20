import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactIcons.css"; // Create a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactIcons = () => {
  const socialMediaIcons = [
    { name: "Facebook", icon: <FaFacebook size={48} /> },
    { name: "Twitter", icon: <FaTwitter size={48} /> },
    { name: "Instagram", icon: <FaInstagram size={48} /> },
    { name: "Youtube", icon: <FaYoutube size={48} /> },
  ];

  return (
    <Container fluid>
      <Row className="contact-icons">
        {socialMediaIcons.map((icon, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <div className="icon-container">
              <p style={{ cursor: 'pointer' }}>{icon.icon}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactIcons;
