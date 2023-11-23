window.onload = function() {
    // Elements
    var table = document.getElementById("myTable");
    var iframe = document.getElementById("iframe");
    var backButton = document.getElementById("backButton");

    // Student data
    let studentData = {
        "class": "ITE103(Evening)",
        "professor": "CHHUNNAN",
        "studentName": "Pom Kevin",
        "studentMajor": "Computer Science",
        "studentID": "60230633"
    };

    // Populate student data
    for (let key in studentData) {
        document.getElementById(key).textContent = studentData[key];
    }

    // Hide elements initially
    hideElement(table);
    hideElement(backButton);

    // Event listeners
    document.getElementById("toggleButton").addEventListener("click", toggleTable);
    document.getElementById("homework1Link").addEventListener("click", function(event) {
        displayHomework(event, "./hw-file/hw1.html");
    });
    document.getElementById("homework2Link").addEventListener("click", function(event) {
        displayHomework(event, "./hw-file/hw2.html");
    });
    backButton.addEventListener("click", goBack);

    // Functions
    function hideElement(element) {
        element.style.display = "none";
    }

    function showElement(element, displayStyle) {
        element.style.display = displayStyle;
    }

    function toggleTable() {
        if (table.style.display === "none") {
            showElement(table, "table");
        } else {
            hideElement(table);
        }
    }

    function displayHomework(event, homeworkFile) {
        event.preventDefault();
        hideElement(table);
        showElement(iframe, "block");
        showElement(backButton, "inline-block");
        iframe.src = homeworkFile;
    }

    function goBack() {
        showElement(table, "table");
        hideElement(iframe);
        hideElement(backButton);
    }
};
