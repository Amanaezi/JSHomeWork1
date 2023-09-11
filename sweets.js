"use strict";

let count = +prompt("Сколько конфет?");
let startCount = count;
while (count > 0)
{
    let q = confirm("Еще конфету?");
    if(q)
    {
       count--; 

       if(count == 0)
        {
            alert("Пора покупать другую коробку…")
        }
        else if (count > startCount / 2) 
        {
            alert('Конфет еще много');
        } 
        else if (count > 3) 
        {
            alert('Конфет маловато');
        } 
        else 
        {
            alert('Конфеты заканчиваются!');
        }
    }
    else
    {
        break;
    }
}
alert(`В коробке осталось ${count} конфет`);