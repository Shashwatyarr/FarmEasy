document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let subtitle = document.getElementById("subtitle").value;
    let price = document.getElementById("price").value;
    let imageInput = document.getElementById("image");
let imageFile = imageInput.files[0]; // Selected image file


    // Ensure fields are filled
    if (!title || !subtitle || !price) {
        alert("Please fill in all fields!");
        return;
    }

    let card = { title, subtitle, price,imageFile };

    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));

    document.getElementById("cardForm").reset();

    // **Redirect to home page after adding**
    window.location.href = "rent.html";
});
