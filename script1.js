document.querySelector('.phone').addEventListener('input', function() {
    // Удаляем все пробелы из начала строки
    let currentValue = this.value.trim();

    // Проверяем, начинается ли строка с "+"
    if (currentValue.length === 0) {
        this.value = "+"; // Устанавливаем "+" при первом вводе
    } else if (!currentValue.startsWith("+")) {
        this.value = "+" + currentValue; // Добавляем "+" в начало, если не стоит
    }
});

document.querySelector('.but_set').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.input_set');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        alert('Данные сохранены');
    } else {
        alert('Нужно заполнить все данные!');
    }
});

