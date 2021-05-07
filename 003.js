/*
INSTRUKSI
=========

Silahkan Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.

# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
  
- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'


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

function miniSudokuBoard(text) {
  // return text.length;
  if (text.length == 0) {
    return `Empty board`;
  }
  if (text.length !== 9) {
    return `Invalid input`;
  } else {
    let baris = 3;
    let kolom = 3;

    let i = 0;

    let hasil = [[]];
    for (let r = 0; r < baris; ++r) {
      hasil[r] = [];
      for (let c = 0; c < kolom; ++c) {
        hasil[r][c] = text[i++];
      }
    }
    return hasil;
  }
}

console.log(miniSudokuBoard("005030081"));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard("105802000"));
// [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("608730000"));
// [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("096040001"));
// [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard("87109"));
// Invalid input
console.log(miniSudokuBoard(""));
// Empty board
