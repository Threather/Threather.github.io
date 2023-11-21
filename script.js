// When the page loads, set the display style of the table to "none"
window.onload = function() {
    document.getElementById("myTable").style.display = "none";
};

document.getElementById("toggleButton").addEventListener("click", function() {
    var table = document.getElementById("myTable");
    if (table.style.display === "none") {
        table.style.display = "table"; // This makes the table visible
    } else {
        table.style.display = "none"; // This hides the table
    }
});