"use strict";

let userCountry = prompt("Введите название страны:");

if (userCountry) 
{
    let cost;
    let isCountry = true;

    switch (userCountry) 
    {
        case "Испания":
            cost = 1050;
            break;
        case "Италия":
            cost = 1100;
            break;
        case "Франция":
            cost = 1000;
            break;
        case "Греция":
            cost = 950;
            break;
        case "Украина":
            cost = 750;
            break;
        case "Турция":
            cost = 800;
            break;
        case "Румыния":
            cost = 850;
            break;
        case "Болгария":
            cost = 900;
            break;
        default:
            alert("У нас нет туров в эту страну.");
            isCountry = false;
            break;
    }

    if (isCountry) 
    {
        const isHot = confirm("Этот тур горячий?");
        cost = isHot ? cost * 0.8 : cost;
        alert(`Стоимость ${(isHot ? "горячего" : "")} тура в ${userCountry} составляет ${cost} USD.`);
    }

}
else 
{
    alert("Вы не ввели название страны.");
}