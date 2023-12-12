document.addEventListener("DOMContentLoaded", function() {
    // button element get karega
    const button = document.querySelector(".batan");

    // contact number element get karega
    const contactNumber = document.getElementById("contact-number");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Toggle the display of the contact number
      if (contactNumber.style.display === "none") {
        contactNumber.style.display = "inline"; // Display the number
      } else {
        contactNumber.style.display = "none"; // Hide the number
      }
    });
  });