['change', 'click'].forEach(evt => {
    document.addEventListener(evt, CheckFilter);
});

function CheckFilter() {
    var type = document.getElementById('sort').value;
    console.log(type);


    const naturals = document.querySelectorAll('[data-category="Nat"]');
    const humanits = document.querySelectorAll('[data-category="Hum"]');
    const others = document.querySelectorAll('[data-category="Oth"]');
    var N, H, O;
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