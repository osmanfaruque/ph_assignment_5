document.getElementById("clear-history-btn").addEventListener("click", function() {
    document.getElementById("activity-log").innerHTML = "";
    document.getElementById("activity-log").appendChild(emptyMessage);
});
