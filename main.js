var _a;
// Get elements from the DOM
var form = document.getElementById('form');
var resumeDisplay = document.getElementById('resume-display');
var outputName = document.getElementById('output-name');
var outputEmail = document.getElementById('output-email');
var outputPhone = document.getElementById('output-phone');
var outputAddress = document.getElementById('output-address');
var outputLinkedin = document.getElementById('output-linkedin');
var outputGithub = document.getElementById('output-github');
var outputPortfolio = document.getElementById('output-portfolio');
var outputEducation = document.getElementById('output-education');
var outputWorkExperience = document.getElementById('output-work-experience');
var outputSkills = document.getElementById('output-skills');
var outputCertifications = document.getElementById('output-certifications');
var outputHobbies = document.getElementById('output-hobbies');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var portfolio = document.getElementById('portfolio').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var certifications = document.getElementById('certifications').value;
    var hobbies = document.getElementById('hobbies').value;
    // Update resume display
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputPhone.textContent = phone;
    outputAddress.textContent = address;
    outputLinkedin.textContent = linkedin;
    outputGithub.textContent = github;
    outputPortfolio.textContent = portfolio;
    outputEducation.textContent = education;
    outputWorkExperience.textContent = workExperience;
    outputSkills.textContent = skills;
    outputCertifications.textContent = certifications;
    outputHobbies.textContent = hobbies;
    // Display resume section
    resumeDisplay.classList.remove('hidden');
});
// Download resume as PDF
(_a = document.getElementById('downloadResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var element = document.getElementById('resume-output');
    if (element) {
        var opt = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }
});
