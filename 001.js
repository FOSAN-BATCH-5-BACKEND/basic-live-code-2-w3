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

function subsLocator(grid){
  let penampung = []
  for (let i = 0; i <= grid.length; i++){
    // console.log(grid[i])
    for (let j = 0; j <= grid[i].length; j++){
      // console.log(j);

        if (grid[i][j] == '*' ){
         penampung.push(i)
         penampung.push(j)
        
        }
        else{
          return 'No drone'
        }
      
    }
    
      return penampung
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