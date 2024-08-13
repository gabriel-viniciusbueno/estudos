const arr = [
    "1 nível",
    ["2 nivel", 42, true],
    [
        ["3 nivel, 1 item", "olá mundo!"],
        ["3 nivel, 2 item", "oi mundo"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][1])

const matriz = [
    ["l1, c1","l1, c2","l1, c3","l1, c4"],
    ["l2, c1","l2, c2","l2, c3","l2, c4"],
    ["l3, c1","l3, c2","l3, c3","l3, c4"],
]

console.table(matriz);

// Como iterar (percorrer) esses arrays??

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        const posicao = matriz[i][j];
        console.log("Posição: " + i + ", " + j + " valor: " + posicao);
    }
}