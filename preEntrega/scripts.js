
function MostrarSeccion(sectionId) {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    document.getElementById('nav-' + sectionId).classList.add('active');
  }