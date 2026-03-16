const products = [
    { name: "Oversized Tee", price: 85, quantity: 10, discount: false },
    { name: "Cargo Pants", price: 120, quantity: 3, discount: true },
    { name: "Night Hoodie", price: 150, quantity: 0, discount: false }, 
    { name: "CLikey", price: 5, quantity: 7, discount: true }, 
]

function getStatus(quantity) {
    if (quantity === 0) {
        return "Out of Stock";
    } else if (quantity <= 5) {
        return "Low Stock";
    } else {
        return "In Stock";
    }
}
function getPrice(price, discount) {
    if (discount) {
        return (price * 0.9).toFixed(2);
    }else{
        return price.toFixed(2);
    }
}

console.log("=== Noctis inventory ===")
console.log("")

products.forEach(product => {
    const status = getStatus(product.quantity)
    const price = getPrice(product.price, product.discount);
    const sale = (`${product.discount ? " on sale" : ""}`)
    console.log(`${product.name}${sale}}`);
    console.log(`${product.name} - $${price} status ${status} stock: ${product.quantity}`)
    console.log("---")
})