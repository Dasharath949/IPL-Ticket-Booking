
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#0b1f3a";
    toast.style.color = "white";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";

    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}

document.querySelectorAll('a[href="#booking"]').forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Please fill in your ticket booking details!");
    });
});


// Activity 7: Live Booking Summary

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

function updateSummary() {
    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value) || 0;

    let price = 0;

    if (stand === "General") {
        price = 1000;
    }
    else if (stand === "Premium") {
        price = 2500;
    }
    else if (stand === "VIP") {
        price = 5000;
    }

    document.getElementById("summaryMatch").textContent =
        match || "Not Selected";

    document.getElementById("summaryStand").textContent =
        stand || "Not Selected";

    document.getElementById("summaryPrice").textContent = price;

    document.getElementById("summaryQuantity").textContent = quantity;

    document.getElementById("summaryTotal").textContent =
        price * quantity;

    showToast("Booking summary updated!");
}

matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("change", updateSummary);
