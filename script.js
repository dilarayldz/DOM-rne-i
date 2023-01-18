var sehir = "";
var bolge = "";

for(i=1; i <= 82; i++){
    sehir = document.getElementsByTagName("option")[i];
    //console.log(sehir);
    bolge = sehir.className;
    //console.log(bolge);
    document.getElementById(bolge).innerHTML += sehir.innerHTML +"<br>";
    //console.log(sehir.innerHTML);
    //console.log(bolge.innerHTML);
}