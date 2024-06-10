function borde(){
    let foto = document.getElementById('foto')
    if (foto.style.border){
        foto.style.border=''
    }
    else{
        foto.style.border = '5px solid blue'
    }
}
foto.addEventListener('click', borde)

verificar.addEventListener("click", function(){
    let num1= parseFloat(document.getElementById('numero1').value)
    let num2= parseFloat(document.getElementById('numero2').value)
    let num3= parseFloat(document.getElementById('numero3').value)

    let total = num1 + num2+ num3
    if (total > 10) {
        resultado.innerHTML = "Llevas muchisisisimos Stickers"
    }
    else {
        resultado.innerHTML = "Llevas: " + total + " stickers" 
    }
})

deshacer.addEventListener('click', function() {
    document.getElementById('numero1').value = 0
    document.getElementById('numero2').value = 0
    document.getElementById('numero3').value = 0
})


botones = ['digito1', 'digito2', 'digito3']
    for (let i=0; i<botones.length;i++ ){
        let select = document.getElementById(botones[i])
        for (let j = 0; j <= 9; j++) {
            var option = document.createElement('option');
            option.value = j;
            option.text = j;
            select.appendChild(option);
        }
    }
ingresar.addEventListener('click', function(){
    let digito1 = parseInt(document.getElementById('digito1').value)
    let digito2 = parseInt(document.getElementById('digito2').value)
    let digito3 = parseInt(document.getElementById('digito3').value)
    let suma = digito1+digito2+digito3
    console.log(typeof(digito1)+ digito1 +digito2 + digito3 + " " + suma )
    if ( (digito1 == 9) && (digito2 == 1) && (digito3 == 1) ){
        clave.innerHTML = "PASSWORD 1 CORRECTO"
    }
    else if ((digito1 == 7) && (digito2 == 1) && (digito3 == 4)){
        clave.innerHTML = "PASSWORD 2 CORRECTO"
    }
    else{
        clave.innerHTML = "INcorrecto"
    }
})
