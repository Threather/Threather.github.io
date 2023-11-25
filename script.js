// Get the 'About me' header
var header = document.querySelector('#aboutMe');

// Get the 'studentInfo' div
var info = document.querySelector('#studentInfo');

// Initially hide the 'studentInfo' div
info.style.display = 'none';

// Add a click event listener to the header
header.addEventListener('click', function() {
    // Toggle the display property of the 'studentInfo' div
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
});
