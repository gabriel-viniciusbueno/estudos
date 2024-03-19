const arr = ["Frodo", "Sam", "Marry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);


// A função .push() serve para adicionar elementos no final de um array
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho)


// A função .unshift() serve para adicionarmos elementos no começo do array
//As funções que adicionam elementos no array retornam o valor do tamanho do array, então podemos guardar esse valor em uma variável
tamanho = arr.unshift("Sauron");
console.log(arr);
console.log(tamanho)

// A função .pop() serve para remover um elemento no final de um array
let lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

lastElement = arr.shift();
console.log(arr);
console.log(lastElement)


//pesquisar por um elemento
//INCLUDE

const inclui = arr.includes("Gandalf");
console.log(inclui);


//Index OF
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e Concatenar
//Slice funciona como um Control X

const hobbits = arr.slice(0, 4); // Pegue os elementos de arr (0,1,2 e 3) e cole em hobbits
console.log(arr);
console.log(hobbits);

const outros = arr.slice(-4);
console.log(outros);

// Também temos a opção de concatenar os arrays
// Concat

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos elementos
// Splice
// Após passarmos o indice dentro do parâmetro de splice, temos que passar quantos elementos serão deletados (no caso, 1) e o que colocar no lugar
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log("A partir daqui")
console.log(sociedade);
console.log(elementosRemovidos)
//Essa função irá retornar o valor do elemento substituído


//Podemos percorrer arrays utilizando o FOR
for(let indice = 0; indice < sociedade.length; indice++){
    let elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição " + indice);
}