//cadastrosDeEventos
let dataDoEvento = "01/12/2022";
let idadeDoParticipanteEouPalestrante = "18";
let listaDeParticipantes = ['Julio', 'Carlos', 'Paula', 'Luciana','Antonio', 'Marcia', 'Luiz', 'Aniceto'];
let listaDePalestrantes = ['Guardiola', 'Klopp', 'Tite'];

let quantidadeDeParticipantes = listaDeParticipantes.length;
let quantidadeDePalestrantes = listaDePalestrantes.length ;
let quantidadeCadastrada = [quantidadeDeParticipantes + quantidadeDePalestrantes];

const idadeMinima = "18";
const quantidadeMaxima = "100";

let partesData = dataDoEvento.split("/");
let dataH = new Date(partesData[2], partesData[1] - 1, partesData[0]);

if (dataH > new Date()) {
    console.log("Data disponível");
 }else {
    console.log("Data inválida");
}

if (idadeDoParticipanteEouPalestrante >= idadeMinima) {
    console.log("Digite o nome do Participante ou Palestrante");
}else {
    console.log("Idade Não permitida");
}

if (quantidadeMaxima > quantidadeCadastrada) {
    console.log("Sem vagas");
   
}else {
    console.log("Cadastro efetuado com sucesso")
}


console.log('**********************************************');
console.log('Quantidade Máxima:', quantidadeMaxima);
console.log('Lista de participantes:', listaDeParticipantes, 'Total de participantes:', listaDeParticipantes.length);
console.log('Lista de palestrantes:',listaDePalestrantes, 'Total de palestrantes:', listaDePalestrantes.length);
console.log('Quantidade total cadastrada:', quantidadeCadastrada);
console.log('Vaga(s) disponível(is)', quantidadeMaxima - quantidadeCadastrada); //aqui estou levando em consideração a soma quantidade de palestrantes e participantes - 100