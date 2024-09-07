var togglebutton = document.getElementById('toggle-skills');
var skillSection = document.querySelector('.skills ul');
togglebutton.addEventListener('click', function () {
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    }
    else {
        skillSection.style.display = 'none';
    }
});
