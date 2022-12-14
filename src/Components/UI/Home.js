import Header from './Header';
import Navbars from './Navbars';
import Footer from './Footer';
import './home.css';

const Home = () => {
    return (
        <>
            <Navbars />
            <div style={{ height: 150, width: "100%", backgroundColor: "rgb(105, 108, 108)" }}>
                <button style={{
                    display: "block", border: "1", borderColor: "#56CCF2", padding: "15 30",
                    fontSize: 23, fontWeight: 200, margin: "10 auto", background: "inherit", cursor: "pointer", color: "white",
                    marginLeft: "45%"
                }}>Get our Latest Album</button>

                <button style={{
                    cursor: "pointer", display: "block", borderRadius: "50%", border: 2, borderColor: "#56ccf2",
                    padding: 20, fontSize: 20, fontWeight: 200, marginLeft: "50%"
                }}>►</button>
            </div>
            <Header header="TOURS" />
            <div style={{marginLeft:"20%",marginRight:"20%"}}>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL19</span>
                    <span className="tour-place">TORONTO,ON</span>
                    <span className="tour-spec-place">BUDWEISER STAGE</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL 22</span>
                    <span className="tour-place"> BRISTOW, VA</span>
                    <span className="tour-spec-place">JIGGY LUBE LIVE</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL 29</span>
                    <span className="tour-place">PHOENIX, AZ</span>
                    <span className="tour-spec-place"> AK-CHIN PAVILION</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">AUG 2</span>
                    <span className="tour-place">LAS VEGAS, NV</span>
                    <span className="tour-spec-place">T-MOBILE ARENA</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">AUG 7</span>
                    <span className="tour-place">CONCORD, CA</span>
                    <span className="tour-spec-place"> CONCORD PAVILION</span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;