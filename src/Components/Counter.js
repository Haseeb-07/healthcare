import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Counter = () => {
  const [countingStarted, setCountingStarted] = useState(false);
  const [doctors, setDoctors] = useState(0);
  const [patients, setPatients] = useState(0);
  const [branches, setBranches] = useState(0);
  const [clients, setClients] = useState(0);

  // Add a scroll event listener
  useEffect(() => {
    const startCountingAnimation = () => {
      const interval = setInterval(() => {
        if (doctors < 120) {
          setDoctors((prevDoctors) => prevDoctors + 1);
        }
        if (patients < 250) {
          setPatients((prevPatients) => prevPatients + 1);
        }
        if (branches < 13) {
          setBranches((prevBranches) => prevBranches + 1);
        }
        if (clients < 650) {
          setClients((prevClients) => prevClients + 1);
        }
        if (doctors >= 120 && patients >= 250 && branches >= 13 && clients >= 650) {
          clearInterval(interval);
        }
      }, 50);
    };

    const handleScroll = () => {
      if (window.scrollY > 500 && !countingStarted) {
        setCountingStarted(true);
        startCountingAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countingStarted, doctors, patients, branches, clients]); // Add all dependencies

  return (
    <div className="counter-container" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <Container fluid>
        <Row>
          <Col xs={6} sm={3}>
            <h3  style={{textAlign:'center'}}>Doctors</h3>
            <h4  style={{textAlign:'center'}}>{countingStarted ? (doctors < 200 ? doctors : 200) : 'Scroll to start counting'}</h4>
          </Col>
          <Col xs={6} sm={3}>
            <h3  style={{textAlign:'center'}}>Patients</h3>
            <h4  style={{textAlign:'center'}}>{countingStarted ? (patients < 250 ? patients : 250) : 'Scroll to start counting'}</h4>
          </Col>
          <Col xs={6} sm={3}>
            <h3  style={{textAlign:'center'}}>Branches</h3>
            <h4  style={{textAlign:'center'}}>{countingStarted ? (branches < 13 ? branches : 13) : 'Scroll to start counting'}</h4>
          </Col>
          <Col xs={6} sm={3}>
            <h3  style={{textAlign:'center'}}>Clients</h3>
            <h4 style={{textAlign:'center'}}>{countingStarted ? (clients < 650 ? clients : 650) : 'Scroll to start counting'}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
