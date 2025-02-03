let popupWin = document.getElementById('popup');


let btn = document.getElementById('buttonPopup')
let btn1 = document.getElementById('buttonPopup1')
let btn2 = document.getElementById('buttonPopup2')
let btn3 = document.getElementById('buttonPopup3')
let btn4 = document.getElementById('buttonPopup4')
let btn5 = document.getElementById('buttonPopup5')
let btn6 = document.getElementById('buttonPopup6')
let btn7 = document.getElementById('buttonPopup7')

let popupCls = document.getElementById('closed')



let popupBtns = [btn,btn1,btn2,btn3,btn4,btn5,btn6,btn7]

popupBtns.forEach(button => {
    button.addEventListener('click', () => {
        popupWin.classList.add('show')
    });
});

popupCls.addEventListener('click', function(){
    popupWin.classList.remove('show')
} )


// -----------------------------------------------------------------TEL
function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    // Если длина введенного значения меньше длины маски, подставляем дефолтное значение
    def.length >= val.length && (val = def);
    // Генерируем маску
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix; // Установка значения в input
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Получаем оба элемента input
    var inputs = document.querySelectorAll("#tel1, #tel0");

    inputs.forEach(function(input) {
        // Добавляем обработчики событий для каждого инпута
        input.addEventListener("input", mask, false);
        input.addEventListener("keydown", function(event) {
            // Обработка нажатий клавиш, чтобы позволить удалять символы
            if (event.key.length === 1 || event.key === "Backspace" || event.key === "Delete") {
                mask.call(this, event); // Вызов маски
            }
        });

        input.focus(); // Установка фокуса на input
        setCursorPosition(3, input); // Установка начальной позиции курсора
    });
});