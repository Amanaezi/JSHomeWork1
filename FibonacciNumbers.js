"use strict";

let n = +prompt("Введите целое значение n:");

if (!isNaN(n)) 
{

  if (n < 1) 
  {
    alert("Пожалуйста, введите положительное целое значение n.");
  } 
  else 
  {
    let oldoldf = 1;
    let oldf = 1;

    alert("Числа Фибоначчи до " + n + ":");

    if (n >= 1) 
    {
      alert("1");
    }

    if (n >= 2) 
    {
      alert("1");
    }

    for (var i = 3; i <= n; i++) 
    {
      let newf = oldoldf + oldf;
      alert(newf);
      oldoldf = oldf;
      oldf = newf;
    }

  }
} 
else 
{
  alert("Пожалуйста, введите корректное число.");
}
