let anos = window.document.querySelector('input#yers')
let kilos = window.document.querySelector('input#peso')
let inp = window.document.querySelector('.inp')

function clicar() {
    let idade = Number(anos.value)
    let kg = Number(kilos.value)
    let ml = 40
    let mla = 35
    let mlb = 30
    let mlc = 25
    let q = ml * kg
    let res = window.document.querySelector('p#res')
    let form = window.document.querySelector('div#form')
    if(anos.value == 0){
        window.alert('Por favor digite sua idade')
    }else if(kilos.value === 0){
        window.alert('Por favor digite seu peso')
    }else{
        res.innerHTML = `Você tem que beber ${q} ml  por dia`
        form.style.height = '300px'
        res.style.background = 'blue'
        res.style.color = 'white'
    }
    
     
}
