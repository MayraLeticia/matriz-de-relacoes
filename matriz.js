/*
let matriz = [
[1,2,3],
[4,5,6],
[7,8,9]
]

let arry = [1,2,3];
let i = 0;

while(i < 10){
    console.log('oi');
    i++;
}

for (let j = 0; j < 10; j++){
    console.log("aaa");
}
*/

let matriz = [
    [1, 1, 1, 0, 0, 0], 
    [0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1]
]

let linha = matriz.length
let coluna = matriz[0].length

let reflexiva = true
let simetrica = true
let assimetrica = true
let antissimetrica = true

for (let i = 0; i < linha; i++){
    if (matriz[i][i] != 1){
        reflexiva = false 
    }
    for (let j = 0; j < coluna; j++){
        if (matriz[i][j] != matriz[j][i]){
            simetrica = false
        }
        if (matriz[i][j] == matriz[j][i]){
            assimetrica = false
        }
        if ((matriz[i][j] == matriz[j][i] ) && (matriz[i][i] != 1)){
            antissimetrica = false
        }
    }
}

if (reflexiva == true){
    console.log("Relação reflexiva.")
}
if (simetrica == true){
    console.log("Relação simétrica.")
}
if (assimetrica == true){
    console.log("Relação assimétrica.")
}
if (antissimetrica == true){
    console.log("Relação antissimétrica.")
}