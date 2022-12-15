import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from '../Context/Cart-Context';
import { Card } from 'react-bootstrap';




const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    console.log("the arrays are", cartCtx.cartData)
    const cartItem = cartCtx.cartData && cartCtx.cartData.length > 0

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

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
            <div style={{ width: 500, height: "45rem", position: "fixed", right: 5, top: 5, backgroundColor: "white", borderColor: "black", border: "solid",overflow:"scroll" }}>
                <div style={{ maxWidth: "100%" }}>
                    <Button style={{ float: "right", paddingRight: 10, backgroundColor: "aqua" }} onClick={hideCart} >X</Button>
                    <h3 style={{ alignItems: "left", paddingTop: 80 }}>CART</h3>

                </div>

                <div style={{ display: "flex", fontWeight: "bold", fontSize: "1.2rem", flexDirection: "row" }}>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "45%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>ITEM</span>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "20%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>PRICE</span>
                    <span style={{ borderBottomWidth: 1, borderBottomStyle: "solid", width: "35%", display: "flex", alignItems: "center", borderBottom: 1, borderBottomColor: "black", marginRight: "1.2rem", paddingTop: 10, paddingBottom: 10 }}>QUANTITY</span>

                </div>
                {/* cart element which are inside cart */}
                {
                    cartItem && (cartCtx.cartData.map((item) =>
                        <div style={{ height: 60, width: 100, display: "flex", paddingBottom: 20, paddingTop: 10, marginBottom: 20 }}>
                            <div>{<img src={item.image} alt={item.name} style={{ height: 60, width: 100, display: "flex" }} />}
                            </div>
                            <p style={{ paddingBottom: 10 }}>{item.name}</p>
                            <div style={{ paddingLeft: 90 }}>${Number(item.price) * Number(item.quantity)}</div>
                            <div style={{ paddingLeft: 80 }}>
                                <Card style={{ background: "aqua", borderRadius: 10, width: 20 }}>{item.quantity}</Card>
                            </div>
                            <Button variant="danger" onClick={() => cartCtx.removeItem(item.id)}>REMOVE</Button>{' '}
                        </div>
                        
                    )
                    )
                }

                <div style={{ width: "100%", paddingLeft: "60%", fontSize: "1.2rem", display: "flex", paddingTop: "20%" }}>
                    <span>
                        <strong>Total</strong>
                        <span>{totalAmount}</span>
                    </span>
                </div>

                <div style={{ bottom: 0, alignItems: "center" }}>
                    <Button onClick={()=> cartCtx.clearCart()}>PURCHASE</Button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                <Button variant="outline-info" onClick={showCart}>Cart</Button>
                <span style={{ color: "aqua", position: "absolute", top: -5 }}>{cartCtx.totalQuantity}</span>
            </div>
            {(isCartValid || props.showCartCall) && cartElemnt()
            }
        </>
    )
}

export default Cart;