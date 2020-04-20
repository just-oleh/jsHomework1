//let input = prompt('Введіть число');
//for (let total = 0; total === null; total =  + input){
//    alert('Ваше число ' + total);
//}

let input;
let total = 0;
do {
    input = prompt('Введіть число');
    input = Number(input);
    total = total + input;
} while(input != null){
    alert('Ваше число - ' + total);
}