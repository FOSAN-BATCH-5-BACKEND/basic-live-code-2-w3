/*
INSTRUKSI
=========

Sebuah submarine dilaporkan karam, diketahui koordinat dari submarine tersebut.
Bantulah petugas SAR dengan mengimplementasikan function subsLocator untuk mencari koordinat yang ada di dalam `grid`.
Submarine akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Submarine ('*') selalu berjumlah 1, tidak mungkin ada submarine lain.

Contoh input dan output ada di test case.

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
//1. menentukan titik koordinat dari submarine melalui index baris dan colom
//2. pengecekan dilakukan melalui baris 
//3. pengecekan dilakukan melalui kolom \
//4. apabila dalam baris dan kolom ada drone (*) maka akan diketahui bahwa index dari * tersebut terdapat dalam baris dan kolom ke berapa
function subsLocator(grid){
  // your code here
  let drone = "";

  if (grid.length === drone){
    return `No drone`
  } else {
  for (let baris = 0; baris < grid.length; baris++){
    drone += grid[baris];
    if (drone == "*"){
      
    } else {
      return ``
    }
    for (let kolom = 0; kolom < grid[baris].length; kolom++) {
      drone += grid[baris][kolom];
    }
  } return drone;
  }
}
console.log(subsLocator([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // [2, 2]

console.log(subsLocator([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // [1, 1]

console.log(subsLocator([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // [0, 2]

console.log(subsLocator([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone