import React from 'react'
import "./RandomColor.css"

const RandoColo = () => {
    const [typeOfColor, setTypeOfColor] = React.useState("hex")
    const [color, setColor] = React.useState("#000000")
    const handelCreateRandomColorHex = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        // return `#${hex.padStart(6, '0')}`;
        setColor(`#${hex}`)
    }
    const handelCreateRandomColorRGB = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        // return `rgb(${r}, ${g}, ${b})`;
        setColor(`rgb(${r}, ${g}, ${b})`)

    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor("hex")}>Create hex color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
            <button onClick={typeOfColor === "hex" ? handelCreateRandomColorHex : handelCreateRandomColorRGB}>Generate Random Color</button>
            <div>
                <h3>Random Color: {color}</h3>

                <h3>Type: {typeOfColor}</h3>
            </div>
        </div>
    )
}

export default RandoColo