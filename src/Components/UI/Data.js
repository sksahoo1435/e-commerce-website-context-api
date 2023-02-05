import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Image1 from '../Images/Album 1.png';
import Image2 from '../Images/Album 2.png';
import Image3 from '../Images/Album 3.png';
import Image4 from '../Images/Album 4.png';
import Image5 from '../Images/coffee2.jpg';
import Image6 from '../Images/Shirt.png';
import CartContext from "../Context/Cart-Context";
import { Link } from "react-router-dom";

const data = [
    { img: Image1, price: '12.99', header: "Album 1", id: 0 },
    { img: Image2, price: '14.99', header: "Album 2", id: 1 },
    { img: Image3, price: '19.99', header: "Album 3", id: 2 },
    { img: Image4, price: '6.99', header: "Album 4", id: 3 },
    { header: "MERCH" },
    { img: Image5, price: '12.99', header: "Cofee", id: 4 },
    { img: Image6, price: '21.99', header: "T-Shirt", id: 5 }
]


const Data = (props) => {

    const [fullDetails, setToFullDetails] = useState([]);

    console.log("full details was ",fullDetails)

    const cartCtx = useContext(CartContext);

    const fullDetailItem = (id) => {
        const FullImage = data.filter((curEle) => {
            return curEle.id === id;
        })
        setToFullDetails(FullImage)

    }

    const checkLogin=()=>{
        return(
            alert("please login first..")
        )
    };


    return (
        <>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "60%", justifyContent: "space-evenly" }}>

                    {
                        data.map((item, index) => {
                            if (index === 4) {
                                return (
                                    <div style={{ width: "100%", padding: 20 }} key={index}>
                                        <h4>{item.header}</h4>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div style={{ width: "35%", }} key={index}>
                                        <div>
                                            <center><h6>{item.header}</h6></center>
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <Link to={localStorage.getItem('token')!==null?"/details":'/login' } state={{img:item.img,header:item.header,price:item.price}}>
                                                <img src={item.img} style={{ height: "100%", width: "100%" }} alt="imaages" onClick={() => fullDetailItem(item.id)} />
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                                            <p style={{ textAlign: "center" }}>{item.price}</p>
                                            {localStorage.getItem('token')===null ?(<Button onClick={checkLogin}>ADD TO CART</Button>):
                                            <Button onClick={() => {
                                                cartCtx.addItem({
                                                    
                                                    id: item.id,
                                                    header: item.header,
                                                    image: item.img,
                                                    price: item.price,
                                                    quantity: 1,
                                                })
                                            }}>ADD TO CART</Button>}
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }


                </div>
            </div>

            <div>
                <Button variant="secondary" color='blue' onClick={() => props.showCart(true)}>See the cart</Button>
            </div>
        </>
    )
};

export default Data;
