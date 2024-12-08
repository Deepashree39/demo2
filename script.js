document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from submitting and reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Display the entered details
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayAddress").textContent = address;

    // Show the details below the form
    document.getElementById("registrationDetails").style.display = "block";
});
