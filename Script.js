let arr = [];

const calc = function(){
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    let h = document.getElementById('h')

    z = Math.floor(y / x**2);
    document.getElementById('z').innerText = z
    console.log(z)
    arr.push(z);
    console.log(arr)

    let sa = "";
    if(z <= 18){sa = "abaixo"}
    if(z <= 25 && z >= 18){sa = "ideal"}
    if(z > 25){sa = "Acima"}

    h.innerHTML+= `IMC: ${z} - Class: ${sa} <br>`

 }
