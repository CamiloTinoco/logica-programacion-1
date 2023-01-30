
let numbers = [];
let numbersMayor;
let numbersMenor;


for (let i = 0; i < 3; i++) {
    let num = (prompt(`Ingrese un número${i+1}:`));
    numbers.push(num);
}
numbersMenor = [...numbers].sort((a,b) => a - b);
console.log(numbersMenor);
numbersMayor = [...numbers].sort((a,b) => b - a);
console.log(numbersMayor)


if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
    
    console.log(" Los números son iguales");   
} else {
    console.log("Los números no son iguales");
} 
