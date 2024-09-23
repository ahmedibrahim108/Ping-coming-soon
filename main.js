const btn = document.getElementById("submitBtn");
const input = document.getElementById("email");

btn.addEventListener("click", () => {
  input.style.outline = "red";
  console.log("required");
});
