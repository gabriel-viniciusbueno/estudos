function calcMedia(n1,n2){
    return (this.notas[0] + this.notas[1]) /2;
}


var aluno = { nome: "Gabriel", notas: [10, 8],
            media: calcMedia
};

var aluno1 = { nome: "Gabriel 2", notas: [5, 9],
            media: calcMedia
};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());1