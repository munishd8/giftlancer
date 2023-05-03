import React from 'react'
import { Col, Container, Nav, Row,Form,Button, Image } from 'react-bootstrap';
const ProductPage = () => {
    return (
        <>
        <div className='product-page-wapper'>
            <div className='product-page-top-wapper'>
                <Container>
                    <div className='product-page-top'>
                        <div className='product-top-left'>
                            <a href="#">Home</a>
                        </div>
                        <div className='product-top-left'>
                            <span>Disclosure:</span>
                            <strong>Affiliate commissions </strong>
                            <strong>Reviews guidelines</strong>
                        </div>
                    </div>
                </Container>
            </div>
                
            <div className='product-main-wapper'>
                <div className='product-page-main-inner'>
                    <Container>
                        <Row>
                            <Col xs={12} md={3}>
                                <div className='sidebar-wapper'>
                                    <div className='search-form-wapper'>
                                        <Form className='subscribe-form'>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Button variant="primary" type="submit">
                                                    <Image src={process.env.PUBLIC_URL + '/images/nev-icons/search.png'} alt="Men Fashion" />
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <aside>
                                        <h3 className='aside-heading'>Filter</h3>
                                        <Nav defaultActiveKey="/home" className="flex-column">
                                            <Nav.Link href="/home">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/loaction.png'} alt="USA" />
                                                USA
                                            </Nav.Link>                                            
                                        </Nav>
                                    </aside>
                                    <aside>
                                        <h3 className='aside-heading'>Categories</h3>
                                        <Nav defaultActiveKey="/home" className="flex-column">
                                            <Nav.Link href="/home">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/menfashion.png'} alt="Men Fashion" />
                                                Men Fashion
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Women Fashion
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Boy’s Baby Product
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Girl’s Baby Product
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Gaming
                                            </Nav.Link>                                            
                                        </Nav>
                                    </aside>
                                </div>
                            </Col>
                            <Col xs={12} md={9}>
                                <div className='product-main-wapper'>
                                    <div className='page-heading-wapper'>
                                        <h1>Products</h1>
                                    </div>
                                    <div className='page-filter-wapper'>
                                        <div className='filter-nav-pills'>
                                            <Nav variant="pills" defaultActiveKey="/home">
                                                <Nav.Item>
                                                    <Nav.Link href="/home">Newest</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">Popular</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">High to low</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">Low to high</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">Under $20</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="link-1">Random</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className='page-products-wapper'>
                                        <div className='products-item-wapper'>
                                            <div className='products-item'>
                                                <div className='products-image'>
                                                    <Image src={process.env.PUBLIC_URL + '/images/product-item.png'} alt="Men Fashion" />
                                                </div>
                                                <div className='live-fav-wapper'></div>
                                                <div className='price-wapper'></div>
                                                <div className='title-info-wapper'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        
                    </Container>  
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductPage;