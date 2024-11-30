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
    alert('Товар удалён из избранного!');
}

function addToCart(event) {
    event.preventDefault();
    alert('Товар добавлен в корзину!');
}