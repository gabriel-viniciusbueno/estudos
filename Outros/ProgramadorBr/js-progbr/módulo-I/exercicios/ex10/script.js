
// Transformando Strings em Números

var a = "5";
var b = "5";

var c = a + b;
console.log(c);
// O computador vai entender que estamos concatenando os dois valores ao invés de somá-los.




// Para fazer com que o computador entenda que estamos querendo realizar a equação, usamos parseInt(). Isso faz com que ele veja os valores como números inteiros

var d = parseInt(a) + parseInt(b);
console.log(d);




//Mas a wild problema appears! ParseInt() só consegue calcular valores inteiros.
var e = "5.9";
var f = "4.1";

var g = parseInt(e) + parseInt(f);
console.log(g);
// O resultado será 9, pois parseInt não é capaz de calcular os números quebrados.





// Por isso existe ParseFloat(), para que possamos transformar strings de números quebrados em numbers para realizar a equação.

var h = parseFloat(e) + parseFloat(f);
console.log(h);



// E é assim que se transforma strings em números.