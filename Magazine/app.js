let word = document.getElementById("word")
let action = document.getElementById("btn")
console.log(word.value,action.value)

function exclusive(){
    return "un"+ word;
}

function strengthen(){
    return "double" + word;
}

function emphasize(){
    return "plusdouble" + word;
}

action.addEventListener('click', (event) => {
    event.preventDefault()
    
    document.getElementById("out").innerHTML = "whjas";
})