window.onload = function() {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    let cardsContainer = document.getElementById("cards");

    // **Check if the container exists**
    if (!cardsContainer) {
        console.error("Error: Container '#cards' not found.");
        return;
    }
}
document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", function () {
        let card = this.closest(".card"); // Card ko select karo
        if (card) {
            card.style.display = "none"; // Card ko pura hide karo (frontend se remove)
        }
    });
});
