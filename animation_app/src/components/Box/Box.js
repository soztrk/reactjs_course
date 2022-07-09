import React from "react"
import "./Box.css"

const Box = (props) => {
    return <div className="box" style={{backgroundColor:props.color}}></div>
}

export default Box