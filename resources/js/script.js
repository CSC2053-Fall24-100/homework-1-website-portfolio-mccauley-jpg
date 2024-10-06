document.getElementById("toggle-schedule").addEventListener("click", function () {
    const scheduleContainer = document.getElementById("schedule-container");
    const button = document.getElementById("toggle-schedule");
    
    if (scheduleContainer.style.display === "none") {
        scheduleContainer.style.display = "block";
        button.textContent = "Hide Schedule";
    } else {
        scheduleContainer.style.display = "none";
        button.textContent = "Show Schedule";
    }
});