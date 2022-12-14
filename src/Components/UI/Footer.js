import React from 'react';
import youtube from '../Images/youtube.jpg';
import spotify from '../Images/Spotify Logo.png';
import facebook from '../Images/Facebook Logo.png';



const Footer =(props)=> {

        return (
            <>
               
                <div >
                    <div style={{ bottom: 0, width: "100%", height: 150, fontSize: 35, display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "rgb(44, 226, 226)", flexDirection: "row" }}>
                        <div> The Generics</div>
                        <div style={{ display: "flex", flexDirection: "row", width: "20%", justifyContent: "space-evenly" }}>
                            <a href="https://www.youtube.com">
                                <img src={youtube} alt='youtube' style={{ height: 30, width: 30 }} ></img>
                            </a>
                            <a href="https://spotify.com">
                                <img src={spotify} alt='youtube' style={{ height: 30, width: 30 }} ></img>
                            </a>
                            <a href="https://www.facebook.com/">
                                <img src={facebook} alt='youtube' style={{ height: 30, width: 30 }} ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    
}
export default Footer;
