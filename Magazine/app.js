let word = document.getElementById("word")
let action = document.getElementById("btn")
console.log(word.value)

function exclusive() {
    document.getElementById("out").innerHTML = "un" + word.value;
   
}

function strengthen() {
    document.getElementById("out").innerHTML = "double" + word.value;
    
}

function emphasize() {
    document.getElementById("out").innerHTML = "plusdouble" + word.value;
    
}


