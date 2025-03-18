document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (phone !== "" && !validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        
        showLoadingSpinner();
        alert("Form submitted successfully!");
        resetForm();

        // form.submit(); // Commenting out the form submission to stay on the page

    });
});

function showLoadingSpinner() {
    const spinner = document.createElement("div");
    spinner.className = "loading-spinner";
    spinner.innerText = "Loading...";
    document.body.appendChild(spinner);
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    // Additional validation can be added here if needed
    const phonePattern = /^[0-9]{10,15}$/;
    return phonePattern.test(phone);
}
