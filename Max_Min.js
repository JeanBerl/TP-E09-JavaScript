var document = Document;
function max(){

    let containerMax = document.getElementById("max");
    containerMin.innerHTML = '';
    let a = document.getElementById("input_amax").value;
    let b = document.getElementById("input_bmax").value;

    if(a > b) containerMax.innerHTML += `${a}`;
    else if(b > a) containerMax.innerHTML += `${b}`;
    else containerMax.innerHTML += 'Eles sao iguais';
}

function min(){
    
    let containerMin = document.getElementById("min");
    containerMin.innerHTML = '';
    let a = document.getElementById("input_amin").value;
    let b = document.getElementById("input_bmin").value;

    if(a < b) containerMin.innerHTML += `${a}`;
    else if(b < a) containerMin.innerHTML += `${b}`;
    else containerMin.innerHTML += 'Eles sao iguais';
}