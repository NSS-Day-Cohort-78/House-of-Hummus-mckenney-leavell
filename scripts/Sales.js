export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable").then(res => res.json())
 
    let salesDivs = sales.map( (sale) => {
        const totalPrice = sale.entree.price + sale.side.price + sale.vegetable.price
        const formattedPrice = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
        return `<p>Receipt #${sale.id} = ${formattedPrice}</p>`
    }).join("")

    return salesDivs
}

