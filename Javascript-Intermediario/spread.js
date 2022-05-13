let lista = [1 , 2 ,5];
let listaIncluir = [3 , 4];

for(let i = 0; i < listaIncluir.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j , 0 , listaIncluir[i]);
            j++;
        }
    }
}

console.log(lista);

const listResult = [1, 2, ...listaIncluir, 5]
console.log(listResult);


let arr = ['a', 'b', 'c'];
let arr2 = arr
let arr3 = [...arr];

arr3.push('d')

console.log(arr);
console.log(arr2);
console.log(arr3);
