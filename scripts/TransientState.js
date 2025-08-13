const transientState = {
    entreeId: 0,
    sideId: 0,
    vegetableId: 0
}

//create setter functions for each component module

// setter function for entrees
    //transient state entree id === chosen entree
export const setEntree = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

// setter function for sides
    // transient state side id === chosen side
export const setSide = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

// setter function for vegetables
    // transient state vegetable id === chosen vegetable
export const setVegetable = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const saveOrders = async () => {
    const postChoices = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(transientState)
    }

    transientState.entreeId = 0
    transientState.sideId = 0
    transientState.vegetableId = 0
    console.log(transientState)

    const response = await fetch("http://localhost:8088/purchases", postChoices)

    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")

    document.dispatchEvent(newSubmissionEvent)

}