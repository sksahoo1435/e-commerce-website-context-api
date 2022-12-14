import React from 'react'

const Header = (props) => {
    
    return (
        <div style={{ backgroundColor: "white", fontSize: 25, textAlign: "center", fontWeight: "bold", padding: 20 }}>
            {props.header}
        </div>
    )
}

export default Header;