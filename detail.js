const productDetails = {
    title: "Sample Product",
    description: "This is a detailed description of the sample product.",
    price: 49.99,
    rating: 4.5,
    specs: ["Dimension: 10x5x2 inches", "Weight: 1.5kg", "Material: Plastic"],
    image: "https://via.placeholder.com/300",
    amazonLink: "https://www.amazon.com/dp/B08XYZ"
};

// Display product information
document.getElementById("product-title").innerText = productDetails.title;
document.getElementById("product-description").innerText = productDetails.description;
document.getElementById("product-price").innerText = productDetails.price;
document.getElementById("product-rating").innerText = productDetails.rating;
document.getElementById("product-image").src = productDetails.image;
document.getElementById("buy-now").onclick = function() {
    window.location.href = productDetails.amazonLink;
};

// Add specifications to list
const specsList = document.getElementById("product-specs");
productDetails.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
});

// Generate Calendar and Slots
function generateCalendar() {
    const calendarTable = document.getElementById("calendar-table");
    const daysInMonth = new Date(2025, 1, 0).getDate();  // Example: February 2025

    let tableContent = `<thead><tr><th>Day</th><th>Available Slot</th></tr></thead><tbody>`;
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(2025, 1, day);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const slotStatus = Math.random() > 0.5 ? "Available" : "Booked";  // Random slot availability

        tableContent += `
            <tr>
                <td>${formattedDate}</td>
                <td>${slotStatus}</td>
            </tr>
        `;
    }

    tableContent += `</tbody>`;
    calendarTable.innerHTML = tableContent;
}

// Store and display available slots (mock example)
localStorage.setItem("product_slots", JSON.stringify({
    "2025-02-15": "Available",
    "2025-02-16": "Booked",
    "2025-02-17": "Available"
}));

// Display stored slots
function displayStoredSlots() {
    const storedSlots = JSON.parse(localStorage.getItem("product_slots"));
    const calendarTable = document.getElementById("calendar-table");

    let tableContent = `<thead><tr><th>Day</th><th>Availability</th></tr></thead><tbody>`;
    
    for (const date in storedSlots) {
        tableContent += `
            <tr>
                <td>${date}</td>
                <td>${storedSlots[date]}</td>
            </tr>
        `;
    }

    tableContent += `</tbody>`;
    calendarTable.innerHTML = tableContent;
}

// Initialize the page
generateCalendar();
displayStoredSlots();
        // Get stored data
        window.onload = function () {
            let rentedItem = localStorage.getItem("rentedItem");
        
            console.log("Fetched from localStorage:", rentedItem); // ✅ Debugging ke liye
        
            if (rentedItem) {
                rentedItem = JSON.parse(rentedItem);
        
                document.getElementById("item-title").textContent = rentedItem.title;
                document.getElementById("item-subtitle").textContent = rentedItem.subtitle;
                document.getElementById("item-price").textContent = `₹${rentedItem.price}/hr`;
            } else {
                console.log("⚠ No rental data found in localStorage!");
                document.getElementById("details-container").innerHTML = "<p>No rental details available.</p>";
            }
        };
        
        