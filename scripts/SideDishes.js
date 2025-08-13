import { setSide } from "./TransientState.js"

const handleSideChange = (e) => {
    if (e.target.name === "side") {
        setSide(e.target.value)
    }
}

export const sideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChange)

    let sidesHTML = "<h2>Sides</h2>"

    const sidesArray = sides.map( (side) => {
        return `<div><input type="radio" name='side' value=${side.id} />${side.title}</div>`
    })

    sidesHTML += sidesArray.join("")

    return sidesHTML
}

