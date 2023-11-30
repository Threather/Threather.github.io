// Get the 'About me' header
var aboutMeHeader = document.querySelector('#aboutMe');
var experienceHeader = document.querySelector('#experience');
var skillHeader = document.querySelector('#skill'); 

// Get the 'studentInfo' div
var studentInfo = document.querySelector('#studentInfo');
var experienceInfo = document.querySelector('#experienceInfo');
var skillInfo = document.querySelector('#skillInfo'); // Adjusted this line

// Initially hide the 'studentInfo', 'experienceInfo', and 'Skill' divs
studentInfo.style.display = 'none';
experienceInfo.style.display = 'none';
skillInfo.style.display = 'none'; // Add this line

// Add a click event listener to the 'About me' header
aboutMeHeader.addEventListener('click', function() {
    // Show the 'studentInfo' div and hide the other divs
    studentInfo.style.display = 'block';
    experienceInfo.style.display = 'none';
    skillInfo.style.display = 'none'; // Add this line
});

// Add a click event listener to the 'Experience' header
experienceHeader.addEventListener('click', function() {
    // Show the 'experienceInfo' div and hide the other divs
    experienceInfo.style.display = 'block';
    studentInfo.style.display = 'none';
    skillInfo.style.display = 'none'; // Add this line
});

// Add a click event listener to the 'Skill' header
skillHeader.addEventListener('click', function() { 
    // Show the 'Skill' div and hide the other divs
    skillInfo.style.display = 'block';
    studentInfo.style.display = 'none';
    experienceInfo.style.display = 'none';
});
