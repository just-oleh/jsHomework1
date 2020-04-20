let credits = 23580;
let pricePerDroid = 3000;
let amount = prompt('Яку кількість ви бажаєте замовити?');
let totalPrice = Number(amount) * pricePerDroid;
if (amount === null){
    console.log('Користувач відмінив!');
} else if (totalPrice > credits){
    console.log('Недостатньо коштів!');
} else {
    console.log(`Ви купили ${amount} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`)
}