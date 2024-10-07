function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar el menú
}


let index = 0;

function moveSlider(n) {
    const slider = document.querySelector('.slider-container');
    const cards = document.querySelectorAll('.card');
    index = (index + n + cards.length) % cards.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}


function toggleDropdown2() {
    const dropdownContent = document.getElementById('dropdown-content-2');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
