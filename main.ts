// Get elements from the DOM
const form = document.getElementById('form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

const outputName = document.getElementById('output-name') as HTMLElement;
const outputEmail = document.getElementById('output-email') as HTMLElement;
const outputPhone = document.getElementById('output-phone') as HTMLElement;
const outputAddress = document.getElementById('output-address') as HTMLElement;
const outputLinkedin = document.getElementById('output-linkedin') as HTMLElement;
const outputGithub = document.getElementById('output-github') as HTMLElement;
const outputPortfolio = document.getElementById('output-portfolio') as HTMLElement;
const outputEducation = document.getElementById('output-education') as HTMLElement;
const outputWorkExperience = document.getElementById('output-work-experience') as HTMLElement;
const outputSkills = document.getElementById('output-skills') as HTMLElement;
const outputCertifications = document.getElementById('output-certifications') as HTMLElement;
const outputHobbies = document.getElementById('output-hobbies') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const portfolio = (document.getElementById('portfolio') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const certifications = (document.getElementById('certifications') as HTMLInputElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value;

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
document.getElementById('downloadResume')?.addEventListener('click', () => {
    const element = document.getElementById('resume-output');
    if (element) {
        const opt = {
            margin:       1,
            filename:     'Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }
});
