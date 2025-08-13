import { setEntree } from "./TransientState.js"

const handleEntreeChange = (e) => {
    if (e.target.name === "entree") {
        setEntree(e.target.value)
    }
}

export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    let entreesHTML = "<h2>Base Dish</h2>"

    const entreesArray = entrees.map( (entree) => {
        return `<div><input type="radio" name='entree' value=${entree.id} />${entree.name}</div>`
    })

    entreesHTML += entreesArray.join("")

    return entreesHTML
}
