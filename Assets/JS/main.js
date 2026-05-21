

const naturals = document.querySelectorAll('[data-category="Nat"]');
const humanits = document.querySelectorAll('[data-category="Hum"]');
const others = document.querySelectorAll('[data-category="Oth"]');
var N, H, O;
// Сбор values-----------------------------------------------
const parentDiv = document.getElementById('cardsGrid');

const divsWithValue = parentDiv.querySelectorAll('div[value]');

const valuesArray = Array.from(divsWithValue).map(div => div.getAttribute('value'));
// Переменная, хранящая текст, вводимый в поисковую строку
let InputText = "";

var input = document.getElementById("searchInput");
//----------------------------------------------------------
['change', 'click'].forEach(evt => {
    document.addEventListener(evt, CheckFilter);
});

function CheckFilter() {
    var type = document.getElementById('sort').value;
    if (type == "All") {
        H = '';
        N = '';
        O = '';
    }
    else if (type == "Hum") {
        H = '';
        N = 'none';
        O = 'none';
    }
    else if (type == "Oth") {
        H = 'none';
        N = 'none';
        O = '';
    }
    else if (type == "Nat") {
        H = 'none';
        N = '';
        O = 'none';
    }

    naturals.forEach(natur => {
        natur.style.display = N;
    });
    humanits.forEach(human => {
        human.style.display = H;
    });
    others.forEach(other => {
        other.style.display = O;
    })
}

input.addEventListener("keyup", function (event) {
    var type = document.getElementById('sort').value;
    if (event.keyCode === 13) {
        const InputText = String(input.value);
        const len = InputText.length;

        for (let i = 0; i < 7; i++) {
            let count = 0;
            const id = String(i);
            for (let j = 0; j < len; j++) {
                if (InputText[j] == valuesArray[i][j]) {
                    count++;
                }
            }
            console.log(count);
            const displayStyle = (count === len) ? '' : 'none';
            const el = document.getElementById(id);
            if (el && el.dataset.category == type) {
                el.style.display = displayStyle;
            }
        }
    }
});

