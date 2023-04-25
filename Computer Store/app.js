let Computer = [
        ['Monitors', 'LCD Screens', 'LED Screens','Vibrant Colors'],
        ['Motherboards','Fast'],
        ['Chips','i9','i7', 'i5', 'Core2Duo', 'Pentium', 'Very Fast'],
        ['Hard Drives', '2TB', '1TB', '100-500 GB', 'Fast Reading'],
        ['DVD-ROMS', 'Burn CDs', 'Burn DVDs'],
        ['Cases','ATX','AT','Mini','Other Sizes','Choice of Colors'],
        ['Power Supplies', 'We can get one for any computer']    
        ]

let out  = document.getElementById("display")

for(let i = 0; i < Computer.length; i++){
    let para = document.createElement("p")
    let value = Computer[i][0] + " : "
    for(let j = 1; j < Computer[i].length; j++){
        
        value += Computer[i][j] 
            if(j !== Computer[i].length - 1){
            value +=  ", "
            }
    }
    para.innerHTML = value
    console.log(value)
    console.log(para.innerHTML)
    out.appendChild(para)
    //out.appendChild(document.createElement("br"))
}