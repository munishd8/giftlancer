import React, { useState } from 'react';
import { Col, Container, Nav, Row,Form,Button, Image, Modal } from 'react-bootstrap';
const ProductPage = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Household Cleaning
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Beer, Wine, Spine
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Hair Care
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Make Up
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Fragnances
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Oral Care
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Office Products
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Music School
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Home & Kitchen
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Mobile Phones
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Mobile Accessories
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Hair Care
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Make Up
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Fragnances
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Oral Care
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Office Products
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Music School
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Home & Kitchen
                                            </Nav.Link>
                                            <Nav.Link eventKey="link-1">
                                                <Image src={process.env.PUBLIC_URL + '/images/nev-icons/womenfashion.png'} alt="Men Fashion" />
                                                Mobile Phones
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
                                    <div className='page-products-wapper mt-4'>
                                        <div className='products-item-wapper'>
                                            <Row>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span onClick={handleShow}>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col> 
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item6.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item3.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item4.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item5.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item2.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item6.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item3.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item4.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item5.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                    <div className='products-item'>
                                                        <div className='products-image'>
                                                            <Image onClick={handleShow} src={process.env.PUBLIC_URL + '/images/product-item2.png'} alt="Men Fashion" />
                                                        </div>
                                                        <div className='like-fav-wapper'>
                                                            <div className='like-wapper'>
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                                                                <div className='like-count'>24 Likes</div>
                                                            </div>
                                                            <div className='fav-wapper'>                                                                
                                                                <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                                                                <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                                                            </div>
                                                        </div>
                                                        <div className='price-wapper'>
                                                            <strong>$ 30.00</strong>
                                                        </div>
                                                        <div className='title-info-wapper'>
                                                            <div className='category'>
                                                                <span onClick={handleShow} >Tee Ball Coach</span>
                                                            </div>
                                                            <div className='title'>
                                                                <span>The ultimate guide to teaching young player ...</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>                                          
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        
                    </Container>  
                </div>
            </div>
        </div>       

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className='products-model'>
                    <div className='products-image'>
                        <Image src={process.env.PUBLIC_URL + '/images/product-item5.png'} alt="Men Fashion" />
                    </div>
                    <div className='like-fav-wapper'>
                        <div className='like-wapper'>
                            <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/likeblack.png'} alt="Men Fashion" />
                            <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/likered.png'} alt="Men Fashion" />
                            <div className='like-count'>24 Likes</div>
                        </div>
                        <div className='fav-wapper'>                                                                
                            <Image className='normal-image' src={process.env.PUBLIC_URL + '/images/favblack.png'} alt="Men Fashion" />
                            <Image className='hover-image' src={process.env.PUBLIC_URL + '/images/favblue.png'} alt="Men Fashion" />                                                                
                        </div>
                    </div>
                    <div className='price-wapper'>
                        <strong>$ 30.00</strong>
                    </div>
                    <div className='title-info-wapper'>
                        <div className='category'>
                            <span >Tee Ball Coach</span>
                        </div>
                        <div className='title'>
                            <span>Introducing Tee Ball Coach: the ultimate guide to teaching young players the fundamentals of baseball, with step-by-step instructions and helpful tips to help build their skills and confidence on the field.</span>
                        </div>
                    </div>
                    <div className='price-list-wapper'>
                        <div className='price-list-items'>
                            <div className='price-list-item'>
                                <div className='price-tem-info'>
                                    <h4>Zalora</h4>
                                    <strong>$ 31.00</strong>
                                </div>
                                <div className='price-tem-buttom'>
                                    <Button variant="warning">Buy Now</Button>
                                </div>
                            </div>
                            <div className='price-list-item'>
                                <div className='price-tem-info'>
                                    <h4>Planet Sports</h4>
                                    <strong>$ 30.99</strong>
                                </div>
                                <div className='price-tem-buttom'>
                                    <Button variant="warning">Buy Now</Button>
                                </div>
                            </div>
                            <div className='price-list-item'>
                                <div className='price-tem-info'>
                                    <h4>Planet Sports</h4>
                                    <strong>$ 30.90</strong>
                                </div>
                                <div className='price-tem-buttom'>
                                    <Button variant="warning">Buy Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            
            {/* <Button variant="secondary" onClick={handleClose}>
                Close
            </Button> */}        
            
        </Modal>
        </>
    )
}
export default ProductPage;