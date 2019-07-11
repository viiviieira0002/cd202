let lancesDeEscada = Number(prompt('Quantos lances de escada você gostaria?'))
let material = prompt('Qual material deseja utilizar?');
let desenho = '';

let i = 0;

while(isNaN(lancesDeEscada)){
    lancesDeEscada = Number(prompt('Só digite números'));
}

while (i < lancesDeEscada){
    console.log(desenho);
    desenho = desenho + material;
}