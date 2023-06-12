let tableStationary = document.getElementById("vending")

let stationeryItems = [
    { name : "Four-line notebook", stock: 2},
    { name : "Two - line notebook", stock: 10},
    { name : "HB pencil", stock: 8},
    { name : "Eraser", stock: 3},
    { name : "Drawing Notebook", stock: 2}
    
]

console.log("Welcome2")
console.log(stationeryItems.length)
for(let i = 0; i < stationeryItems.length; i++){
    console.log("Welcome")
    let element = document.createElement("tr")
    element.setAttribute('id', 'tableItemRow');
    tableStationary.appendChild(element)

    let name = document.createElement("td")
    name.setAttribute('id', 'tableItemName');
    name.innerHTML = stationeryItems[i]['name']
    element.appendChild(name)

    let stock = document.createElement("td")
    stock.setAttribute('id', stationeryItems[i]['name'] + 'Stock');
    stock.innerHTML = stationeryItems[i]['stock']
    element.appendChild(stock)

    let quantData = document.createElement("td")
    let quantity = document.createElement("input")
    quantity.setAttribute('type', 'number')
    quantity.setAttribute('id', stationeryItems[i]['name'] + 'Text')
    quantity.min = 0
    quantity.setAttribute('max', stationeryItems[i]['stock'])
    quantData.appendChild(quantity)
    element.appendChild(quantData)

    let buyButton = document.createElement("td")
    let add = document.createElement("input")
    add.setAttribute('type', 'button')
    add.onclick = function(){ buyItems(stationeryItems[i]['name'])}
    add.setAttribute('value','Buy')
    add.setAttribute('id', stationeryItems[i]['name'] + 'Button')
    buyButton.appendChild(add)
    element.appendChild(buyButton)

}

function buyItems(itemID){
    console.log("button clicked")
    let itemQuantity = document.getElementById(itemID + 'Text').value
    for(let i = 0; i < stationeryItems.length; i++){
        if(itemID === stationeryItems[i]['name']){
            stationeryItems[i]['stock'] -= itemQuantity
            document.getElementById(itemID + 'Stock').innerHTML = stationeryItems[i]['stock']
            document.getElementById(itemID + 'Text').value = ''

        }
    }
    
}