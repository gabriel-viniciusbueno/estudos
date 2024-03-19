// Personagem 1
let char1Name = prompt("Digite o nome de seu personagem");
let char1Dmg = parseFloat(prompt("Digite os pontos de ATK de " + char1Name));

// Personagem 2
let char2Name = prompt("Digite o nome de outro personagem");
let char2HP = parseFloat(prompt("Digite os pontos de HP de " + char2Name));
let char2Def = parseFloat(prompt("Digite os pontos de defesa de " + char2Name));

// Escudo

const shieldDef = false;

// COMBATE

if (char1Dmg > char2Def){
    char2HP -= char1Dmg;
    alert("Agora " + char2Name + " possui apenas " + char2HP + " de HP");
} else if(char1Dmg > char2Def && shieldDef == true){
    char2HP -= char1Dmg/2;
    alert("Agora " + char2Name + " possui " + char2HP + " de HP");
} else{
    alert(char2Name + " não recebeu dano algum e continua com " + char2HP + " de HP");
}

