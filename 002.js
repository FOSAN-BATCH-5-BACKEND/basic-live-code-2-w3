/*
INSTRUKSI
=========

Implementasikan function throwbackMe untuk membalikkan sebuah data yang terdapat dalam parameter `arr`.
Sehingga index terakhir menjadi didepan dan berurutan sampe index pertama yang posisinya pindah ke belakang.
-DAN- begitu juga dengan setiap elemen string yang ada didalamnya menjadi terbalik.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []


ATURAN CODING:
--------------
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
  - .find()
  - .splice()
*/

function throwbackMe(arr) {
  let hasil = [];
  let hasil2 = []
  for (let i = arr.length-1; i >= 0; i--){
    hasil.push(arr[i])
  }
  for(let i = 0; i < hasil.length; i++){
    let penampung = ''
    for(let j = hasil[i].length-1; j >= 0; j--){
      penampung += hasil[i][j]
    }
    // console.log(penampung)
    hasil2.push(penampung)
  }
  
  
  return hasil2
}


console.log(throwbackMe(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(throwbackMe(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(throwbackMe([]));
// []