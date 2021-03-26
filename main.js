function getImie() {
    let imie = document.getElementById('inp1').value
    if(imie.length < 3) {
        alert("Imię nie może być krótsze niż 3 znaki.")
        return
    } else {
       console.log("Imię:", imie) 
    }
}
function getNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        alert("Nazwisko nie może być krótsze niż 2 znaki.")
    } else {
        console.log("Nazwisko:", nazwisko)
    }
}
function getEmail() {
    let email = document.getElementById('inp3').value
    console.log("Email:", email)
}
function getTelefon() {
    let telefon = document.getElementById('inp4').value
    console.log("Telefon:", telefon)
}
function getWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    console.log("Wiadomość do sprzedającego:", wiadomosc)
}
function changeImie() {
    let imie = document.getElementById('inp1').value
    if(imie.length < 3) {
    alert("Imię nie może być krótsze niż 3 znaki.")
    }
}
function changeNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        alert("Nazwisko nie może być krótsze niż 2 znaki.")
    }
}

function changeEmail(val) {
    let xd = val.split('')
    console.log(xd)
    const isEmail = xd.some(item => item === '@')
    console.log(isEmail)
}

function changeTelefon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
            alert(`${'"' + item + '"'} To nie jest cyfra `)
            return
        }
    })
    console.log(num)
}
function changeWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    if(wiadomosc.length < 20) {
        alert("Wiadomość do sprzedającego nie może być krótsza niż 20 znaków.")
        return
    }
}