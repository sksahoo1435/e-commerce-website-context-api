import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';




const Cart = (props) => {
    const [isCartValid, setCartValid] = useState(false);
    const showCart = (props) => {
        setCartValid(true);
    }
    const hideCart = () => {
        setCartValid(false);
        props.hideCartSee(false);
    }

    const cartElemnt = () => {
        return (
            <div style={{ width: 500, height: "100%", position: "fixed", right: 5, top: 5, backgroundColor: "white", borderColor: "black", border: "solid" }}>
                <div style={{ maxWidth: "100%" }}>
                    <Button style={{ float: "right", paddingRight: 10, backgroundColor: "aqua" }} onClick={hideCart} >X</Button>
                    <h3 style={{ alignItems: "left", paddingTop: 80 }}>CART</h3>

                </div>

                <div style={{ display: "flex", fontWeight: "bold", fontSize: "1.2rem", flexDirection: "row" }}>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "45%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>ITEM</span>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "20%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>PRICE</span>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "35%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>QUANTITY</span>

                </div>

                <div style={{ width: "100%", paddingLeft: "60%", fontSize: "1.2rem", display: "flex", paddingTop: "20%" }}>
                    <span>
                        <strong>Total</strong> $
                        <span>0.00</span>
                    </span>
                </div>

                <div style={{ bottom: 0, alignItems: "center"}}>
                    <Button >PURCHASE</Button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                <Button variant="outline-info" onClick={showCart}>Cart</Button>
                <span style={{ color: "aqua", position: "absolute", top: -5 }}>0</span>
            </div>
            {(isCartValid || props.showCartCall) && cartElemnt()
            }
        </>
    )
}

export default Cart;