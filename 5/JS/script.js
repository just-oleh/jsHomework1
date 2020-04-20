let country = prompt('Куди бажаєте доставити?');
country = country[0].toUpperCase() + country.substring(1);
//country[0].toUpperCase() + country.substring(1)

switch (country){
    case 'Китай':
        alert(`Доставка в ${country} буде коштувати 100 кредитів.`);
        break;
    case 'Чилі':
        alert(`Доставка в ${country} буде коштувати 250 кредитів.`);
        break;
    case 'Австралія':
        alert(`Доставка в ${country} буде коштувати 170 кредитів.`);
        break;
    case 'Індія':
        alert(`Доставка в ${country} буде коштувати 80 кредитів.`);
        break;
    case 'Ямайка':
        alert(`Доставка в ${country} буде коштувати 120 кредитів.`);
        break;
    default:
        alert('В вашу країну доставка недоступна!');
}