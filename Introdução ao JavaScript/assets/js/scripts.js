var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function colorChange () {
    if(currentNumber <0){
        currentNumberWrapper.style.color = '#FF0000';
    }else{
        currentNumberWrapper.style.color = '#000000';
    } 
      
}
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}