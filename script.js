let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Скрываем все слайды
    }

    slideIndex++;
    
    if (slideIndex > slides.length) { slideIndex = 1 } // Возвращаемся к первому слайду

    slides[slideIndex - 1].style.display = "flex"; // Показываем текущий слайд

    setTimeout(showSlides, 10000); 
}



function showDetails(card) {
    const details = card.querySelector('.additional-info');
    details.style.display = 'block'; // Показать детали
}

function hideDetails(card) {
    const details = card.querySelector('.additional-info');
    details.style.display = 'none'; // Скрыть детали
}

function addToFavorites(event) {
    event.preventDefault();
    alert('Товар добавлен в избранное!');
}

function addToCart(event) {
    event.preventDefault();
    alert('Товар добавлен в корзину!');
}
