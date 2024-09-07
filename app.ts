const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const SkillSection = document.querySelector('.skills ul') as HTMLElement;
toggleButton.addEventListener('click' , () => {
    if (SkillSection.style.display === 'none'){
        SkillSection.style.display = 'block';
    }else{
        SkillSection.style.display = 'none';
    }
});


const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Generate the resume dynamically
    resumeContent.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;
});


resumeContent.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'P' || target.tagName === 'LI') {
         const input = document.createElement('input');
        let value = target.innerText;
        if (target.tagName === 'LI') {
            value = value.trim();
        }
        input.value = value;
        target.innerHTML = `<strong>${target.innerText.split(': ')[0]}:</strong> `;
        target.appendChild(input);

        input.addEventListener('blur', () => {
            target.innerHTML = `<strong>${target.innerText.split(': ')[0]}:</strong> ${input.value}`;
        });
    }
});
