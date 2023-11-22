window.onload = function() {
    // When the page loads, set the display style of the table to "none"
    document.getElementById("myTable").style.display = "none";
    // Hide the "Go Back" button
    document.getElementById("backButton").style.display = "none";

    // Add an event listener to the button with id "toggleButton"
    document.getElementById("toggleButton").addEventListener("click", function() {
        var table = document.getElementById("myTable");
        if (table.style.display === "none") {
            table.style.display = "table"; // This makes the table visible
        } else {
            table.style.display = "none"; // This hides the table
        }
    });

    // Add an event listener to the link with id "homework1Link"
    document.getElementById("homework1Link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action
        document.getElementById("myTable").style.display = "none"; // Hide the table
        document.getElementById("iframe").style.display = "block"; // Show the iframe
        document.getElementById("backButton").style.display = "inline-block"; // Show the back button
        document.getElementById("iframe").src = "./hm-file/hm1.html"; // Set the source of the iframe
    });

    // Add an event listener to the button with id "backButton"
    document.getElementById("backButton").addEventListener("click", function() {
        document.getElementById("myTable").style.display = "table"; // Show the table
        document.getElementById("iframe").style.display = "none"; // Hide the iframe
        document.getElementById("backButton").style.display = "none"; // Hide the back button
    });
};
