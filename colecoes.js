let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
console.log(numeros[0]); // Acessa o primeiro elemento
console.log(numeros[2]); // Acessa o terceiro elemento

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adiciona um elemento ao final
frutas.unshift("morango"); // Adiciona um elemento ao início
console.log(frutas);

frutas.forEach((fruta, index) => {
    console.log(`Índice ${index}: ${fruta}`);
    }
)

let misto = [42, "texto", true, null, { chave: "valor" }, [1, 2, 3]];
console.log(misto);
console.log("Array misto:", misto.length);
console.log(misto[misto.length - 1]); // Acessa o último elemento

for (let i = 0; i < misto.length; i++) {
    console.log(`Fruta no índice ${i}:, ${frutas[i]}`);
}

for (let fruta of frutas) {
    console.log(fruta);
}   

for (let indice in frutas) {
    console.log(` Índice ${indice}: ${frutas[indice]}`);
}

//frutas.pop(); // Remove o último elemento
//frutas.shift(); // Remove o primeiro elemento
frutas.splice(1, 3); // Remove o elemento no índice 1
    console.log(frutas);

    let mapa = new Map();

mapa.set("nome", "Danilo")
mapa.set("altura", 1.78)

console.log(mapa.get("nome"));
console.log(mapa.has("idade")); // Verifica se a chave existe)

mapa.delete("nome"); // Remove a chave "nome"
mapa.clear(); // Remove todas as entradas do mapa
console.log(mapa.size); // Tamanho do mapa  

let conjunto = new Set([1, 2, 3, 4, 5, 6,]);
console.log(conjunto)
conjunto.add(7); // Adiciona um elemento
conjunto.delete(2); // Remove o elemento 2

conjunto.forEach(valor => console.log(valor));

let pessoa = {
    nome: "Rhaissa",
    idade: 19,  
    profissao: "estudante",
    endereco:{
        rua: "Rua A",
        numero: 123,
    }
}

console.log(pessoa.nome); // Acessa a propriedade "nome"
console.log(pessoa["idade"]); // Acessa a propriedade "idade" usando colchetes
console.log(pessoa.endereco.rua); // Acessa a propriedade "rua" dentro de "endereco"

delete pessoa.endereco; // Remove a propriedade "endereco"