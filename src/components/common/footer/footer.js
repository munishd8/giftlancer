import { Container, Nav, Row, Col, Button,Form } from 'react-bootstrap';

function FooterMain() {
    return (

        <div className='footer-wapper'>
            <Container>
                <div className='footerinnet-top'>
                    <Row>
                        <Col md={3}>
                            <div className='footer-title'>
                                <h2>Get Notified</h2>
                            </div>
                            <div className='footer-subcribe-wapper'>
                                <p>Subscribe to our newsletter</p>
                                <Form className='subscribe-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                                <div className='social-icon-wapper'>
                                    <ul>
                                        <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icon/facebook.png'} alt="" /></a></li>
                                        <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icon/twiter.png'} alt="" /></a></li>
                                        <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icon/youtube.png'} alt="" /></a></li>
                                    </ul> 
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='footer-title'>
                                <h2>Categories</h2>
                            </div>
                            <div className='footer-menu'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">Anniversary Gift</Nav.Link>
                                    <Nav.Link eventKey="link-1">Gift for Dads</Nav.Link>
                                    <Nav.Link eventKey="link-2">Gift for Brothers</Nav.Link>
                                    <Nav.Link eventKey="link-2">Gift for Mothers</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='footer-title'>
                                <h2>Top Reviews</h2>
                            </div>
                            <div className='footer-menu'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">Best Gifting Websites</Nav.Link>
                                    <Nav.Link eventKey="link-1">Best Gifting Websites in UK</Nav.Link>
                                    <Nav.Link eventKey="link-2">Best Gifting Websites in For Dads</Nav.Link>
                                    <Nav.Link eventKey="link-2">Best Gifting Websites in USA</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='footer-title'>
                                <h2>Company</h2>
                            </div>
                            <div className='footer-menu'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">About Us</Nav.Link>
                                    <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
                                    <Nav.Link eventKey="link-2">Subscribe</Nav.Link>
                                    <Nav.Link eventKey="link-2">Crypto gifting Tool</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='footer-title'>
                                <h2>Info</h2>
                            </div>
                            <div className='footer-menu'>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">Affiliate disclosure</Nav.Link>
                                    <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
                                    <Nav.Link eventKey="link-2">Terms of Service</Nav.Link>
                                    <Nav.Link eventKey="link-2">Human Sitemap</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='footerinnet-bottom mb-4'>
                    <div className='copywrite'>
                        <strong>© 2019 - 2022 One Media, LLC. All Rights Reserved.</strong>
                        <p className='mt-1'>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to <br/>
                        provide a means for us to earn commissions by linking to Amazon.com and affiliated sites.</p>
                    </div>
                </div>                
            </Container>
        </div>
    );
}

export default FooterMain;