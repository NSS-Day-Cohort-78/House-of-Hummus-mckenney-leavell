import { setVegetable } from "./TransientState.js"

const handleVegChange = (e) => {
    if (e.target.name === "vegetable") {
        setVegetable(e.target.value)
    }
}

export const vegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegChange)

    let vegetablesHTML = "<h2>Vegetables</h2>"

    const vegetablesArray = vegetables.map( (vegetable) => {
        return `<div><input type="radio" name='vegetable' value=${vegetable.id} />${vegetable.type}</div>`
    })

    vegetablesHTML += vegetablesArray.join("")

    return vegetablesHTML
}