const pass = document.querySelector('#pass');
const len = document.querySelector('#len')
const save = document.querySelector('.far ');
const upp = document.querySelector('#upp')
const low = document.querySelector('#low')
const num = document.querySelector('#num')
const sym = document.querySelector('#sym')
const btn = document.querySelector('button');
let dlugosc
tablica = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

len.addEventListener('input', () => {
    dlugosc = len.value
})

save.addEventListener('click', () => {
    pass.select()
    document.execCommand('copy')
})

btn.addEventListener('click', () => {
    
    var arr2 = []
    if (num.checked) {
        var numer = tablica.filter(function (item) {
            return item.match(/\d/)
        });
    }
    if (low.checked) {
        var male = tablica.filter(function (item) {
            return item.match(/[a-z]/)
        });
    }
    if (sym.checked) {
        var symbol = tablica.filter(function (item) {
            return item.match(/[!@#$%^&*()~]/)
        });
    }
    if (upp.checked) {
        var duze = tablica.filter(function (item) {
            return item.match(/[A-Z]/)
        });
    }
    arr0 = []
    arr01 = arr0.concat(numer, male, symbol, duze)
    arr = arr01.filter(function (element) {
        return element !== undefined;
    })
    
    for (i = 0; i < dlugosc; i++) {
        var arr1 = arr[Math.ceil(Math.random() * arr.length)]
        arr2.push(arr1)
        console.log(arr2)
        pass.value = arr2.join('')
    }
})