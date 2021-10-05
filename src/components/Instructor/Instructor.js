import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/julie_kay_scallcup.png'
import img2 from '../../images/tWitch.png'
import img3 from '../../images/sugarfoot_therapy.png'
import img4 from '../../images/erin_babbs.png'
import img5 from '../../images/jennie_morton.png'
import img6 from '../../images/teddy_forance.png'
import img7 from '../../images/kathryn_mccormick.png'
import img8 from '../../images/mark_meismer.png'
import { NavLink } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <h1 className="text-primary text-center " style={{ fontSize: "4em" }}>Teacher Training from 300+ of the Industry’s Best</h1>

            <Row md={5} xs={1}>
                {/* card no 1  */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">Julie Kay Stallcup</Card.Title>
                            <Card.Text className="fw-bold">
                                Business & Tiny Tots
                            </Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no2  */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">
                                tWitch
                            </Card.Title>
                            <Card.Text className="fw-bold">Hip Hop Grooves</Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no 3  */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">Sugarfoot Therapy</Card.Title>
                            <Card.Text className="fw-bold">
                                Strength and Conditioning</Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no 4  */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">Erin Babbs</Card.Title>
                            <Card.Text className="fw-bold">Jazz Technique
                            </Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no 5 */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">Jennie Morton</Card.Title>
                            <Card.Text className="fw-bold">The Science of Stretching
                            </Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no 6  */}
                <Col className="m-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title className="text-primary fs-6">Teddy Forance</Card.Title>
                            <Card.Text className="fw-bold">Improvisation
                            </Card.Text>
                            <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                {/* card no 7  */}
                <Col className="m-4"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img7} />
                    <Card.Body>
                        <Card.Title className="text-primary fs-6">Kathryn McCormick</Card.Title>
                        <Card.Text className="fw-bold">Contemporary
                        </Card.Text>
                        <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                    </Card.Body>
                </Card></Col>
                {/* card no 8  */}
                <Col className="m-4"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img8} />
                    <Card.Body>
                        <Card.Title className="text-primary fs-6">Mark Meismer</Card.Title>
                        <Card.Text className="fw-bold">Lyrical
                        </Card.Text>
                        <NavLink to="/home" className="bg-info px-2 py-1 text-decoration-none fs-6 text-light rounded  ">Join Class</NavLink>
                    </Card.Body>
                </Card></Col>

            </Row>
        </div>
    );
};

export default home;