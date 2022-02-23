// Close nav when link is clicked
const checkbox = document.getElementById("navi-toggle");
console.log(checkbox);
document.querySelectorAll(".navigation__link").forEach((item) => {
  item.addEventListener("click", (event) => {
    //handle click
    checkbox.checked = false;
  });
});
