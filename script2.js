document.querySelector('.but-cart').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.input-cart');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        alert('Данные приняты. Скоро вам позвонят.');
    } else {
        alert('Нужно заполнить все данные!');
    }
});



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
    alert('Товар удалён из корзины!');
}