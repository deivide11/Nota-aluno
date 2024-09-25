var array = [];
for (var i = 0; i <3; i++){
    array[i] = parseFloat(prompt('Digite a nota n° ' + (i + 1)));
}

array[3] = prompt("Digite o Nome do Aluno:");

var media = 0;

for (var i = 0; i < 3; i++){
    media += array[i];
}

media = media / 3;

alert("A média é: ", media);
alert("Do aluno: ", array[3]);
console.log("A média é: ", media);
console.log("Do aluno: ", array[3]);