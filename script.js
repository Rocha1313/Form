console.log();

const number = document.getElementById("ageNumber");
const age = document.getElementById("age");

age.addEventListener("input", (event) => {
    number.innerHTML = event.target.value;
})