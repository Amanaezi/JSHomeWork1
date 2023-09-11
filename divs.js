"use strict"

let k = +prompt("Введите число");
let str = "";
if(isNaN(k))
{
    alert("Error! Wrong number");
}
else
{
    
    for (let i = 1; i <= k; i++)
    {
        if(k % i == 0)
        {
            str += i + " ";
        }
    }
}
alert(k + ": " + str);