const prompt = require('prompt-sync')();

function classifyHero(name, xp) {
    let level = '';

    if (xp < 1000) {
        level = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        level = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        level = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        level = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        level = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        level = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        level = 'Imortal';
    } else {
        level = 'Radiante';
    }

    return `O Herói de nome ${name} está no nível de ${level}`;
}

function main() {

    let heroName = prompt('Digite o nome do Herói: ');
    let xpHero = 0;
    let level;

    while(true) {
        console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log(`Olá ${heroName}! Esses são os níveis dos Heróis:`);
        console.log('1. Ferro \n2. Bronze \n3. Prata \n4. Ouro \n5. Platina \n6. Ascendente \n7. Imortal \n8. Radiante \n9. Sair');
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

        level = parseInt(prompt('Escolha o nível de pontuação: '));

        switch (level) {
            case 1:
                xpHero += 999;
                break;
            case 2:
                xpHero += 1001;
                break;
            case 3:
                xpHero += 2001;
                break;
            case 4:
                xpHero += 5001;
                break;
            case 5:
                xpHero += 7001;
                break;
            case 6:
                xpHero += 8001;
                break;
            case 7:
                xpHero += 9001;
                break;
            case 8:
                xpHero += 10001;
                break;
            case 9:
                console.log('Saindo do sistema...');
                return;
            default:
                console.log('Erro: Por favor, digite um número de 1 a 9');
                continue;
        }
        
        console.log(classifyHero(heroName, xpHero));
        break;
    }
}


main();