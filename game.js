function play() 
{
    let min = Math.floor(Math.random() * 11);
    let max = min + Math.floor(Math.random() * 11);
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert("Диапазон чисел: от " + min + " до " + max + ". Попробуйте угадать число!");
  
    while (true) 
    {
      let guess = +prompt("Введите вашу догадку:");
  
      if (guess === null) 
      {
        alert("Игра завершена.");
        break;
      }
  
      let parsedGuess = parseInt(guess);
  
      if (isNaN(parsedGuess)) 
      {
        alert("Game over! Введите число.");
      } 
      else if (parsedGuess === secretNumber) 
      {
        alert("You win! Поздравляем, вы угадали число: " + secretNumber);
        break;
      } 
      else if (parsedGuess < min || parsedGuess > max)
      {
        alert("Число вне диапазона от " + min + " до " + max + ". Попробуйте еще раз.");
      } 
      else if (parsedGuess < secretNumber) 
      {
        alert("Ваше число слишком маленькое. Попробуйте еще раз.");
      } 
      else if (parsedGuess > secretNumber) 
      {
        alert("Ваше число слишком большое. Попробуйте еще раз.");
      }
    }
  }