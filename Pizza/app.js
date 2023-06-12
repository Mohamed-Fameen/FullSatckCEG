


let pizzaForm = document.getElementById("submitform");

var price = {
    "Small": 99,
    "Medium": 199,
    "Large": 399,
    "deep pan": 20,
    "mushrooms": 15,
    "olives": 10,
    "fingernail": 30,
    "spicy beef": 20,
    "home delivery": 25
};

pizzaForm.addEventListener('click', (event) => {

    document.getElementById('cost').innerHTML = ''
    event.preventDefault()
    let cost = 0
    estimateCost()
    
})

function estimateCost() {
    cost = 0
let pizzaName = document.getElementById("name")
let deepPan = document.getElementById("deeppan")
let size = document.getElementById("size").value
let chosenToppings = [];
    let extraToppings = document.getElementsByName('toppings');
    for (var topping of extraToppings)
    {
        if (topping.checked) {
            chosenToppings.push(topping.value);
        }
    }
    
    for (let i = 0; i < chosenToppings.length; i++){
        let index = chosenToppings[i]
        cost += Number(price[index.trim()]) 
        
    }
    if(deepPan.checked){
        cost += 20
    }
    console.log(size)
    cost += price[size.trim()]

    document.getElementById("cost").innerHTML = cost;
}