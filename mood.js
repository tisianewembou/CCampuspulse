document.addEventListener("DOMContentLoaded", () => {
    const moodSelect = document.getElementById("mood-select");
    const submitBtn = document.getElementById("submit-btn");
    const spinBtn = document.getElementById("spin-btn");
    const resultDiv = document.getElementById("result");
    const moodResult = document.getElementById("mood-result");
    const wheel = document.getElementById("wheel");

    let moodVotes = [];

    // Store submitted moods
    submitBtn.addEventListener("click", () => {
        const selectedMood = moodSelect.value;
        moodVotes.push(selectedMood);
        alert(`Mood submitted: ${selectedMood}`);
    });

    // Spin the wheel & display the most common mood
    spinBtn.addEventListener("click", () => {
        if (moodVotes.length === 0) {
            alert("No moods submitted yet!");
            return;
        }

        // Spin animation
        let randomSpins = Math.floor(Math.random() * 5) + 3; 
        wheel.style.transition = "transform 3s ease-out";
        wheel.style.transform = `rotate(${randomSpins * 360}deg)`;

        // Delay before result shows
        setTimeout(() => {
            // Find most common mood
            let modeMood = getMostCommonMood(moodVotes);

            // Show result
            moodResult.textContent = modeMood;
            resultDiv.classList.remove("hidden");

            // Confetti explosion
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

        }, 3500); // Wait for wheel animation to finish
    });

    // Function to find most common mood
    function getMostCommonMood(array) {
        let frequency = {};
        let max = 0;
        let mostCommon = "";

        for (let mood of array) {
            frequency[mood] = (frequency[mood] || 0) + 1;
            if (frequency[mood] > max) {
                max = frequency[mood];
                mostCommon = mood;
            }
        }
        return mostCommon;
    }
});
