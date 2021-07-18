const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomDigit = getRandomDigit();
    console.log(randomDigit);

    document.body.style.backgroundColor = colors[randomDigit];
    color.textContent = colors[randomDigit];
});

function getRandomDigit() {
    return Math.floor(Math.random() * colors.length);
}