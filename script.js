document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navlist li');
    const sections = document.querySelectorAll('section');

   
    const removeActiveClasses = () => {
        navItems.forEach(item => item.classList.remove('active'));
    };

  
    const setActiveItem = (index) => {
        if (index !== -1) {
            removeActiveClasses();
            navItems[index].classList.add('active');
        }
    };

   
    navItems.forEach((item, index) => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

           
            setActiveItem(index);
        });
    });

    const getCurrentSection = () => {
        let index = -1;
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                
                index = i;
            }
        });
        return index;
    };

  
    window.addEventListener('scroll', () => {
        const currentIndex = getCurrentSection();
        setActiveItem(currentIndex);

    });

    
    const currentIndex = getCurrentSection();
    setActiveItem(currentIndex);
});
