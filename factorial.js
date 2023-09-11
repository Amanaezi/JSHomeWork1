"use strict";

let n = +prompt("Input number");
if(isNaN(n))
{
    alert("Error! Wrong number");
}
let y = 1;

for (let i = 1; i <= n; i++)
{
    y *= i;
}

alert("Factorial: " + y);