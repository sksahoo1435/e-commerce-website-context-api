import React from 'react'
import Navbars from './Navbars';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import classes from './details.module.css';

function Details(props) {

    const location = useLocation()

    const { header, img,price } = location.state || {}


    return (
        <>
            <Navbars />
            <div style={{ width: "100%", height: "100%" }}>
                <div >
                    <div className={classes.image} style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        <img src={img} alt="img" />
                    </div>

                    <div>
                        <img src={img} alt="img" style={{ height: "5%", width: "5%", margin: "0.5%", transform: "rotate(270deg)", border: "bold", borderOutlineColor: "aqua" }} />
                        <img src={img} alt="img" style={{ height: "5%", width: "5%", margin: "1%", transform: "rotate(90deg)" }} />
                        <img src={img} alt="img" style={{ height: "5%", width: "5%", margin: "1%", transform: "rotate(180deg)" }} />
                    </div>
                    <div style={{ marginBottom: 0 }}>
                        <Button style={{ margin: "1%" }}> ADD TO CART</Button>
                        <Button style={{ margin: "1%" }}>BUY NOW</Button>
                    </div>
                </div>
                <div style={{paddingLeft: "50%" }}>
                    <div>
                    <h2 style={{ color: "blue",position:"fixed",margin: -362,marginTop:-50 }}>{header} </h2>
                    </div>
                    <div style={{fontSize:25,marginLeft:-360,marginTop:-200}}>
                        <p style={{color:"yellowgreen"}}>We are provide you the best Price </p>
                        $ {price}
                    </div>                   
                </div>
            </div>
        </>
    )
}

export default Details;