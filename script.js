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
    const additionalInfo = card.querySelector('.a2');
    const details = card.querySelector('.additional-info');
    
    if (additionalInfo) {
        additionalInfo.style.display = 'none'; // Скрыть элемент с классом a2
    }
    
    if (details) {
        details.style.display = 'block'; // Показать дополнительные детали
    }
}

function hideDetails(card) {
    const additionalInfo = card.querySelector('.a2');
    const details = card.querySelector('.additional-info');
    
    if (additionalInfo) {
        additionalInfo.style.display = 'block'; // Вернуть отображение элемента с классом a2
    }
    
    if (details) {
        details.style.display = 'none'; // Скрыть дополнительные детали
    }
}

function addToFavorites(event) {
    event.preventDefault();
    alert('Товар добавлен в избранное!');
}

function addToCart(event) {
    event.preventDefault();
    alert('Товар добавлен в корзину!');
}

const containers = document.querySelectorAll('.scrolling-wrapper-flexbox');

containers.forEach(container => {
    // Опция для прокрутки
    container.addEventListener("wheel", function (e) {
        var rect = container.getBoundingClientRect();
        if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        ) {
            e.preventDefault(); // Запретить прокрутку страницы
            const deltaX = e.deltaY > 0 ? 100 : -100; // Перемещение в зависимости от направления прокрутки
            container.scrollLeft += deltaX; // Прокрутка влево или вправо
        }
    }, { passive: false });
});