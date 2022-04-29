
class sorteador{


sortear()
{
    const n1 = document.getElementById("numero1").value;
    console.log(n1);
    const n2 = document.getElementById("numero2").value;
    console.log(n2);

    let range  = {min: n1, max: n2};
    let delta = range.max - range.min;

    const rand =  Math.floor((Math.random() * (range.max - range.min))+range.min);
    document.getElementById("resultado").innerHTML = rand;
    

}

}
function sortear() {
    var sort = new sorteador;
    document.getElementById("titulores").innerHTML = "Numero sorteado:";
    sort.sortear();
}










