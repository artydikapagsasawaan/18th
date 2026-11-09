
// OPENING ANIMATION

const opening = document.getElementById("opening");
const mainInvitation = document.getElementById("mainInvitation");
const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {

    openButton.textContent = "WELCOME! ★";
    openButton.disabled = true;

    opening.classList.add("hide");

    setTimeout(() => {
        opening.style.display = "none";
        mainInvitation.classList.remove("hidden");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 850);

});


// COUNTDOWN TO DECEMBER 18, 2026 AT 11 AM

const partyDate = new Date("2026-12-18T11:00:00+08:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = partyDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h3>IT'S PARTY TIME! ★</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
