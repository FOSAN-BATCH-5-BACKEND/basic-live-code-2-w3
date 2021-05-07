/*
INSTRUKSI
=========

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyMore(maxBudget, gifts)
  Parameter yang pertama adalah budget Sergei,
  Parameter yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh.
  Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


# Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

# Asumsi:
- `maxBudget` akan memiliki nilai >= 0, dan array `gifts` tidak akan pernah kosong.

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

function howManyMore(maxBudget, gifts) {
  // your code here
  
}


console.log(howManyMore(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyMore(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyMore(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyMore(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyMore(0, [10000, 3000])); // 0