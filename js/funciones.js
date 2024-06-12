

var interruptor = document.querySelector(".interruptor");
// var encendido = false;


interruptor.addEventListener("click", () => {

    interruptor.classList.toggle("encendido");

    // if (encendido){
    //     interruptor.remove("encendido");
    // }else{
    //     interruptor.add("encendido");
    // }
    // encendido = !encendido;
});


// CONDICIONAL IF ELSE

    // if (encendido){
    //        //apagar
    //        interruptor.className = "interruptor";
    //        encendido = false;
    // }else{
    //        //encendido
    //     interruptor.className = "interruptor encendido";
    //     encendido = true;
    // }

    
    // //encendido =! encendido;

// CONDICIONAL OPERADOR TERNARIO
// interruptor.className = `interruptor ${!encendido ? "encendido" : ""}`;

// es dinámico le estamos diciendo que si encendido sea true pase a false y biceversa
// encendido = !encendido;
// });
