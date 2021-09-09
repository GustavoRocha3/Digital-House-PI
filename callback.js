setTimeout(() => console.log("Sinal verde, pode seguir"),60000)

setInterval(() => console.log("Passou um segundo"),1000);


function prepararBolo(callbackMassaPronta, callbackBoloPronto){
    console.log("Batendo a massa...")
    console.log("Massa indo ao forno...")
    callbackMassaPronta();
    console.log("Preparando o recheio...")
    console.log("Recheio pronto...")
    callbackBoloPronto();
}

function meuBoloEstaPronto(){
    console.log("Bolo pronto...")
}

prepararBolo(() => console.log("Massa pronta quadrada..."), meuBoloEstaPronto);