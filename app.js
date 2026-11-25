
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
