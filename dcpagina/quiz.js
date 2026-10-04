let preguntas=document.querySelectorAll(".pregunta");

let actual=0;

let puntos=0;

preguntas.forEach(pre=>{

let botones=pre.querySelectorAll("button");

botones.forEach(boton=>{

boton.onclick=function(){

botones.forEach(b=>b.disabled=true);

if(boton.dataset.correcta=="1"){

boton.classList.add("correcta");

puntos++;

}else{

boton.classList.add("incorrecta");

pre.querySelector("[data-correcta='1']").classList.add("correcta");

}

setTimeout(()=>{

pre.classList.remove("activa");

actual++;

if(actual<preguntas.length){

preguntas[actual].classList.add("activa");

}else{

document.querySelector(".quiz").innerHTML=`

<h1 style="text-align:center;">¡Terminaste!</h1>

<h2 style="text-align:center;">Puntaje ${puntos}/${preguntas.length}</h2>

`;

}

},1200);

}

});

});