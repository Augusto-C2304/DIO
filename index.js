let nomeHeroi = "super mario" 
let xp = 4563
let liga = ""

    
switch (true) {

    case xp === 1000:
        liga = "Ferro";
        break;

    case xp >= 1001 && xp < 2001:
        liga = "Bronze";
        break;

    case xp >= 2001 && xp < 5001:
        liga = "Prata";
        break;

    case xp >= 5001 && xp < 8001:
        liga = "Ouro";
        break;

    case xp >= 8001 && xp < 9001:
        liga = "Platina";
        break;

    case xp >= 9001 && xp < 10001:
        liga = "Asscendente";
        break;

    case xp >= 10001 && xp < 11001:
        liga = "Imortal";
        break;

    case xp >= 11001:
        liga = "Radienate";
        break;
}






console.log(`O heroi ${nomeHeroi} esta na liga de ${liga}`);