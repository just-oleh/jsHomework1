const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let enterPassword = prompt('Введіть пароль.');
if(enterPassword === null){
    message = 'Відмінено користувачем!';
    alert(message);
} else if (enterPassword === ADMIN_PASSWORD){
    message = 'Ласкаво просимо!';
    alert(message);
} else {
    message = 'Доступ заборонений, неправильний пароль!';
    alert(message);
}