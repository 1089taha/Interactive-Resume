const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const SkillSection = document.querySelector('.skills ul') as HTMLElement;
toggleButton.addEventListener('click' , () => {
    if (SkillSection.style.display === 'none'){
        SkillSection.style.display = 'block';
    }else{
        SkillSection.style.display = 'none';
    }
});
