//base de palabras disponibles
var diccionario = [
    "alura",
    "oracle",
    "latam",
    "ahorcado",
    "javascrip",
    "html",
    "css",
    "programacion",
    "perro",
    "gato",
    "loro",
];

String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length);
 } 

var palabra = diccionario[Math.floor(Math.random()*diccionario.length)];//selecciona una palabra aleatoria.
var palabrasgion = palabra.replace(/./g, "_ ");
var contadorfallos=0;//cuenta la cantidad de intentos fallidos
let letraserradas =[];//acumula y muestra las letras erradas
document.querySelector("#muestra").innerHTML= palabrasgion;
document.querySelector("#evaluar").addEventListener("click", ()=>
{
    var fallo= true;
     var letra = document.querySelector("#letra").value;
     
     if(letra!== ""){

     for (let i in palabra) {
         if(letra == palabra[i]){
             palabrasgion = palabrasgion.replaceAt(i*2, letra);
             fallo= false;
         }    
         
     }
     if (fallo){
         contadorfallos++;

         
         letraserradas.push(letra);
         document.querySelector("#errados").innerHTML=letraserradas;
         document.querySelector("#letra").value = "";
         document.querySelector("#img").style.
         backgroundPosition = -(202*contadorfallos)+"px 0";
         if(contadorfallos==4){
            document.querySelector("#perdiste").style.display="flex";
         }else {
             if (palabrasgion.indexOf("_")<0){
                 document.querySelector("#ganador").style.display="flex";
             }
         }
     }
     
     document.querySelector("#muestra").innerHTML= palabrasgion;
     document.querySelector("#letra").value = "";
     document.querySelector("#letra").focus();
    }else{
        alert("No ingrese esoacios en blanco");
    }
});
document.querySelector("#btnnuevo").addEventListener("click", ()=>{
    let palabra = document.querySelector("#nuevaP").value;
    if(palabra!== ""){
        if (diccionario.indexOf(palabra) === -1) {
                    diccionario.push(palabra);
                    console.log(diccionario);
                    let ve= "La palabra "+palabra+" se añadio con exito. ";
                    document.querySelector("#nuevaP").value = "";
                    document.querySelector("#verificado").innerHTML= ve;
                } else if (diccionario.indexOf(palabra) > -1) {
                    let err = "La palabra: " + palabra + " ya existe en el diccionario";
                    document.querySelector("#verificado").innerHTML= err;
                }
        }else{
                alert("no ingrese espacios en blanco.")};
});

function reiniciar(){
    document.querySelector("#perdiste").style.display="none";
    location.href= location.href;

}