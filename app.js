
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

(function () {

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
    quantityInput.addEventListener("input", updateSummary);

})();

// Activity 8: Hamburger Menu

(function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

})();

// Activity 8: Match Filter and Grid/List View

(function () {

    const teamFilter = document.getElementById("teamFilter");
    const matchCards = document.querySelectorAll(".match-card");

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;

        matchCards.forEach(function (card) {

            const teams = card.getAttribute("data-teams");

            if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

    const matchContainer = document.getElementById("matchContainer");
    const gridButton = document.getElementById("gridView");
    const listButton = document.getElementById("listView");

    gridButton.addEventListener("click", function () {

        matchContainer.classList.remove("match-list");
        matchContainer.classList.add("match-grid");

    });

    listButton.addEventListener("click", function () {

        matchContainer.classList.remove("match-grid");
        matchContainer.classList.add("match-list");

    });

})();