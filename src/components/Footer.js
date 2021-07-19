import React from 'react'

export default function Footer() {
    let footerStyle = {
        textAlign: "right",
        marginRight: "0",
        fontSize: "0.9em",
        fontFamily: "'Bubblegum Sans', cursive",

    }
    return (
        <div className="container py-3" style={footerStyle}>
            copyright: onlineTest.com - 2021
        </div>
    )
}
