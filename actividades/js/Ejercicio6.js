"use strict"
{
    inicio = Number(prompt("Introduzca el inicio: "));
    fin = Number(prompt("Introduzca el final: "));
    console.log("Los numeros que estan dentro de "+inicio+ " y "+ fin +" son :");
    for(i=inicio+1;i<fin;i++){
        if(i%2!=0){
        console.log(i);
        }
    }
}







