function clicar() {
    let anos = window.document.querySelector('input#yers')
    let kilos = window.document.querySelector('input#peso')
    let inp = window.document.querySelector('.inp')
    let idade = Number(anos.value)
    let kg = Number(kilos.value)
    let ml = 40
    let mla = 35
    let mlb = 30
    let mlc = 25
    let q = ml * kg
    let res = window.document.querySelector('p#res')
    let form = window.document.querySelector('div#form')
    if(anos.value.length == 0 || anos.value > 115) {
        anos.style.border = '3px solid red'
        anos.style.background = '#ffff0092'
        window.alert('Por favor digite sua idade')
    }else if(kilos.value.length == 0){
        window.alert('Por favor digite seu peso')
        kilos.style.border = '3px solid red'
        kilos.style.background = '#ffff0092'
    }else{
        res.innerHTML = `Você tem ${idade} anos e pesa ${kg} kg, portando deve beber ${q} ml ao longo do dia.`
        form.style.height += '300px'
        res.style.background += 'blue'
        res.style.color += 'white'
        anos.value = ''
        anos.focus()
    }
    
     
}
