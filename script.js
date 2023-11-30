// Get the 'About me' header
var aboutMeHeader = document.querySelector('#aboutMe');

// Get the 'Experience' header
var experienceHeader = document.querySelector('#experience');

// Get the 'studentInfo' div
var studentInfo = document.querySelector('#studentInfo');

// Get the 'experienceInfo' div
var experienceInfo = document.querySelector('#experienceInfo');

// Initially hide the 'studentInfo' and 'experienceInfo' divs
studentInfo.style.display = 'none';
experienceInfo.style.display = 'none';

// Add a click event listener to the 'About me' header
aboutMeHeader.addEventListener('click', function() {
    // Show the 'studentInfo' div and hide the 'experienceInfo' div
    studentInfo.style.display = 'block';
    experienceInfo.style.display = 'none';
});

// Add a click event listener to the 'Experience' header
experienceHeader.addEventListener('click', function() {
    // Show the 'experienceInfo' div and hide the 'studentInfo' div
    experienceInfo.style.display = 'block';
    studentInfo.style.display = 'none';
});
