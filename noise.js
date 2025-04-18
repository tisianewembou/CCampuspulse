document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");

    function updateLabel(value) {
        if (value < 33) {
            sliderValue.textContent = "Low";
        } else if (value < 67) {
            sliderValue.textContent = "Medium";
        } else {
            sliderValue.textContent = "High";
        }
    }

    // Initialize the label on page load
    updateLabel(slider.value);

    // Update text when slider moves
    slider.addEventListener("input", function() {
        updateLabel(this.value);
    });
});
