import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbars = (props) => {
    return (
        <>
            <Navbar bg='dark' variant="dark" style={{ backgroundColor: "black", position: "fixed", width: "100%" }} >
                <Container>

                    <Link to='/home' className='home' style={{
                        position: "relative", paddingLeft: "35%", textDecoration: "none",
                        paddingBottom: 3, color: "white"
                    }}>HOME</Link>
                    <Link to='/' className='store' style={{ paddingBottom: 3, color: "white", textDecoration: "none" }}>STORE</Link>
                    <Link to='/about' className='about' style={{ paddingBottom: 3, color: "white", textDecoration: "none", paddingRight: "30%" }}>ABOUT</Link>
                    <Cart showCartCall={props.showCart} hideCartSee={(data)=>{props.hideCartSeeCart(data)}}/>
                </Container>
            </Navbar>
            <div style={{
                backgroundColor: "rgb(105, 108, 108)", padding: 30, fontSize: 100, textAlign: "center",
                color: "white", fontWeight: "bold"
            }}>
                The Generics
            </div>
            
        </>
    )
}

export default Navbars;