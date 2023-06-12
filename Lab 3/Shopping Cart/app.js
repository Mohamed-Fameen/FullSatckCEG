let btninp = document.getElementById('inputbutton')

let store = [
    {
        name : "Monitor",
        img : 'monitor.png',
        description : "Introducing the perfect monitor for your needs! Our monitor boasts a crystal-clear display with full HD resolution, providing sharp and vibrant images. With a large screen size and adjustable stand, you can work or play comfortably for hours. Plus, it offers a variety of connectivity options, including HDMI and VGA, so you can easily connect to your favorite devices. Don't settle for a subpar viewing experience, upgrade to our monitor today!",
        price : 7999
    }
]
btninp.addEventListener('click', (event)=>{
    event.preventDefault()
    let itemName = document.getElementById('itemin').value
    display(itemName)
});

function display(name){
    let source = ""
    let desc = ""
    let price = ""
    for(let i = 0; i < store.length; i++){
        if(store[i]['name'] === name){
            source = store[i]['img']
            desc = store[i]['description']
            price = store[i]['price']           
    }
    let displayContainer = document.getElementById('containerdisplay');

            let containerItem = document.createElement('div')
            containerItem.setAttribute('class', 'containeritem')

            let img = document.createElement('img')
            img.src = name + ".png"
            img.id = name + "img"
        
            let title = document.createElement('h3')
            title.id = name + 'title'
            title.innerHTML = name
            
            let description = document.createElement('p')
            description.id = name + 'desc'
            description.innerHTML = desc
        
            let priceBox = document.createElement('p')
            priceBox.id = name + 'price'
            priceBox.innerHTML = "Price : ₹" + price   
            priceBox.style.color = 'black'
            priceBox.style.fontStyle = 'bold'

            let addButton = document.createElement('button')
            addButton.type = 'button'
            addButton.id = name + 'addButton'
            addButton.innerHTML = "Add"
            addButton.style.color = "black"
        
        
            containerItem.appendChild(img)
            containerItem.appendChild(title)
            containerItem.appendChild(description)
            containerItem.appendChild(priceBox)
            containerItem.appendChild(addButton)

            displayContainer.appendChild(containerItem)

            addButton.addEventListener('click', (event) =>{
                event.preventDefault();
                console.log("working")
            })
            
        }

}