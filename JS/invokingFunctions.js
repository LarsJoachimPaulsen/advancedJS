var test = function (val){
    console.log(this);
    console.log(arguments)
    console.log(val); 
    console.log(arguments[1])
};

function sum(){
    let sum = 0; 
    for(let i = 0; i < arguments.length; i++){
        sum+=arguments[i]; 
    }
    return sum;
}
