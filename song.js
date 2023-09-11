"use strict";

// Запрос количества бутылок и названия напитка с помощью prompt()
let count = +prompt("Input count of bottles:");
let Name = prompt("Input bottle name:");

// Проверка на валидность введенных данных
if (isNaN(count) || count < 1) 
{
    alert("Incorrect count of bottles!");
}
else if (!Name) 
{
    alert("Wrong name of bottle");
}
else 
{
    for (var i = count; i > 0; i--) 
    {
        alert(i + " " + (i === 1 ? "bottle" : "bottles") + " of " + Name + " on the wall,");
        alert(i + " " + (i === 1 ? "bottle" : "bottles") + " of " + Name + ",");

        alert("If one of those bottles should happen to fall");
        alert((i - 1) + " " + (i - 1 === 1 ? "bottle" : "bottles") + " " + Name + " on the wall,");
    }

    alert("No more bottles of " + Name + " on the wall, no more bottles of " + Name + ".");
    alert("There's nothing else to fall, because there's no more bottles of " + Name + " on the wall.");
}
