const colors = [
  "rgb(51, 204, 255)",
  "rgb(153, 102, 255)",
  "rgb(255, 153, 204)",
  "rgb(255, 255, 153)",
  "rgb(0, 255, 153)",
];

const themeBtn = document.getElementById("theme-btn");

themeBtn?.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];
  console.log(themeBtn);
});

document.getElementById("discover")?.addEventListener("click", function () {
  window.location.href = "./discover.html";
});

document.getElementById("back-btn")?.addEventListener("click", function () {
  window.location.href = "./index.html";
});
