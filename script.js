const resumeBtns = document.querySelectorAll('.resume-btn');
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelectorAll('.logo');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link,idx) => {
    link.addEventListener('click', () =>{
        if (!link.classList.contains('active')){
            activePage();

            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');
    }
})

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')
        
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});



