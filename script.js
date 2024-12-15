// Add event listener to the button
document.querySelector("button").addEventListener("click", function() {
    alert("button clicked");
});

let balance = 0;

function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance;
}