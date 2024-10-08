var toggleButton = document.getElementById('toggle-skills');
var SkillSection = document.querySelector('.skills ul');
toggleButton.addEventListener('click', function () {
    if (SkillSection.style.display === 'none') {
        SkillSection.style.display = 'block';
    }
    else {
        SkillSection.style.display = 'none';
    }
});
var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value;
    // Generate the resume dynamically
    resumeContent.innerHTML = "\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Skills:</strong> ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n    ");
});
resumeContent.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName === 'P' || target.tagName === 'LI') {
        var input_1 = document.createElement('input');
        var value = target.innerText;
        if (target.tagName === 'LI') {
            value = value.trim();
        }
        input_1.value = value;
        // input.value = target.innerText.split(': ')[1];
        target.innerHTML = "<strong>".concat(target.innerText.split(': ')[0], ":</strong> ");
        target.appendChild(input_1);
        input_1.addEventListener('blur', function () {
            target.innerHTML = "<strong>".concat(target.innerText.split(': ')[0], ":</strong> ").concat(input_1.value);
        });
    }
});
