import React from 'react';
import './AboutUs.css';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {

    return (
        <div className="about">
            <Container>
                <Row className='p-2'>
                    <Col>
                        <Row className='p-2'>
                            <Col className='mt-4'>
                                <h2>About Us</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>We have highly trained and experienced Doctors where they served their worked area long time</p>
                            </Col>
                            <Col>
                                <p>We have latest equipments and many others facilities for patient</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p>We have specialist in various area so no worry about</p>
                            </Col>
                            <Col>
                                <p>Our Nursing facilities are higher class so you will get your comfort area</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;