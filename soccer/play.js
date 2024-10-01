const football = document.getElementById("football");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  // Спершу затримка перед початком анімації
  setTimeout(() => {
    // Рухаємо м'яч по траєкторії
    football.style.animation = "moveFootball 5s linear";

    // Додаємо ще один ефект через 3 секунди
    setTimeout(() => {
      football.style.animation = "spinFootball 2s infinite linear";
    }, 3000); // Додаємо затримку в 3 секунди
  }, 1000); // Початкова затримка в 1 секунду перед стартом анімації
});
