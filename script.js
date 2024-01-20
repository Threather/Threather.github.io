// Get the headers
var headers = {
    'aboutMe': document.querySelector('#aboutMe'),
    'experience': document.querySelector('#experience'),
    'skill': document.querySelector('#skill'),
    'project': document.querySelector('#project')

};

// Get the sections
var sections = {
    'aboutMe': document.querySelector('#studentInfo'),
    'experience': document.querySelector('#experienceInfo'),
    'skill': document.querySelector('#skillInfo'),
    'project' : document.querySelector('#projectInfo')  
};

// Initially hide all sections
for (let section in sections) {
    sections[section].style.display = 'none';
}

// Function to hide all sections except the one to show
function hideAllExcept(showSectionKey) {
    for (let section in sections) {
        if (section === showSectionKey) {
            sections[section].style.display = sections[section].style.display === 'block' ? 'none' : 'block';
        } else {
            sections[section].style.display = 'none';
        }
    }
}

// Add event listeners to each header
for (let header in headers) {
    headers[header].addEventListener('click', function() {
        hideAllExcept(header);
    });
}
var navLinks = document.querySelectorAll('#aboutMe, #experience, #skill, #project');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});
['project1', 'project2', 'project3'].forEach(function(projectId) {
    document.querySelector('#' + projectId).addEventListener('click', function() {
        var details = document.querySelector('#' + projectId + '-details');
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});
