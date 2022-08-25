
function calc(value){
    display.value += value
}
function calculate(){
    if(display.value==""){
        alert("math error")
    }else{
        var input = display.value
    var output = eval(input)
    display.value = output
    }
    
}
function clearScreen(){
  display.value = ""
} 
function deleteOne(){
    display.value = display.value.slice(0,-1)
}