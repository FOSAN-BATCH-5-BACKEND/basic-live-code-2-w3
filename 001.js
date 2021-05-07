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

function subsLocator(grid) {
  // your code here
  let posisi = [];
  for (let i = 0; i < grid.length; i++) {
    // posisi.push(i);
    for (let j = 0; j < grid.length; j++) {
      // posisi.push(j);
      console.log(grid[j]);
      if (grid[j] == "*") {
        posisi.push(j);
      }
    }
  }
  return posisi;
}
console.log(
  subsLocator([
    ["", "", ""],
    ["", "", ""],
    ["", "", "*"],
  ])
); // [2, 2]

console.log(
  subsLocator([
    ["", "", ""],
    ["", "*", ""],
    ["", "", ""],
  ])
); // [1, 1]

console.log(
  subsLocator([
    ["", "", "*"],
    ["", "", ""],
    ["", "", ""],
  ])
); // [0, 2]

console.log(
  subsLocator([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])
); // No drone
