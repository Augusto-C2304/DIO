

let vitorias = 187
let derrotas = 100
let saldo = calculaMediasDeVitoria(vitorias, derrotas);
let ranki = rankiada(saldo)

console.log(`Vc tem ${saldo} de vitorias, E foi claficado com ${ranki} no ranking`)

function calculaMediasDeVitoria () {
  let resultado = vitorias - derrotas
  return resultado
};

function rankiada(){

  let liga = ''

    switch (true) {
      case saldo === 10:
        liga = "Ferro";
        break;
      case saldo >= 11 && saldo < 21:
        liga = "Bronze";
        break;
      case saldo >= 21 && saldo < 51:
        liga = "Prata";
        break;
      case saldo >= 51 && saldo < 81:
        liga = "Ouro";
        break;
      case saldo >= 81 && saldo < 91:
        liga = "Diamante";
        break;
      case saldo >= 91 && saldo < 101:
        liga = "Lendário";
        break;
      case saldo >= 101:
        liga = "Imortal";
        break;
      default:
        liga = "Desconhecido";
    }

  return liga
}
