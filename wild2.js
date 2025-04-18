document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("close-modal");
    const modal = document.getElementById("modal");

    if (!openBtn || !closeBtn || !modal) {
        console.error("One or more elements are missing.");
        return;
    }

    openBtn.addEventListener("click", () => {
        modal.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });
});
