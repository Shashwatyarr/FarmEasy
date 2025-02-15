document.querySelectorAll(".orderbtn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let hours = prompt("Enter hours for rental:");
        if (hours && !isNaN(hours)) {
            let price = parseInt(this.parentElement.querySelector(".price").textContent.replace("₹", "").replace("/hr", ""));
            alert(`Total Rent Cost: ₹${price * hours}`);
        } else {
            alert("Please enter a valid number!");
        }
    });
});
let scrollAmount = 0;
setInterval(() => {
    document.querySelector(".cards").scrollBy({ left: 300, behavior: "smooth" });
    scrollAmount += 300;
    if (scrollAmount >= document.querySelector(".cards").scrollWidth) {
        scrollAmount = 0;
        document.querySelector(".cards").scrollTo({ left: 0, behavior: "smooth" });
    }
}, 3000);
window.onload = function() {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    let cardsContainer = document.getElementById("cards");

    // **Check if the container exists**
    if (!cardsContainer) {
        console.error("Error: Container '#cards' not found.");
        return;
    }

    // **Clear old content to prevent duplicates**
    

    cards.forEach(function(card) {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <div class="title"><p>${card.title}</p></div>
            <div class="image">${card.imageFile}</div>
            <div class="subtitle"><p>${card.subtitle}</p></div>
            <div class="ownername"></div>
            <div class="club">
                <div class="price">₹${card.price}/hr</div>
                <button class="orderbtn">Rent Now</button>
            </div>
        `;

        cardsContainer.appendChild(cardElement);
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let cardsContainer = document.querySelector(".cards");

    if (!cardsContainer) {
        console.error("Error: Container '.cards' not found.");
        return;
    }

    // Event listener for "Rent Now" buttons
    cardsContainer.addEventListener("click", function (event) {
        let button = event.target.closest(".orderbtn");
        if (!button) return;

        let card = button.closest(".card");
        let title = card.querySelector(".title p").textContent.trim();
        let subtitle = card.querySelector(".subtitle p").textContent.trim();
        let price = card.querySelector(".price").textContent.trim();
        let imageSrc = card.querySelector(".image img")?.src || "default.jpg"; // Handle missing images

        // Store details in localStorage
        let rentalData = { title, subtitle, price, imageSrc };
        localStorage.setItem("rentalData", JSON.stringify(rentalData));

        // Redirect to order page
        window.location.href = "pay.html";
    });
});

