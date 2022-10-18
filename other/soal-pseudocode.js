// 1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
// - Jika angka <=60 maka tampilkan tulisan “KURANG” di sebelah angka tsb.
// - Jika >60 dan <=70 maka tampilkan tulisan “CUKUP” di sebelah angka tsb.
// - Jika >70 dan <=80 maka tampilkan tulisan “BAIK” di sebelah angka tsb.
// - Jika >80 maka tampilkan tulisan “LUAR BIASA” di sebelah angka tsb.

console.log("SOAL 1");
for (let i = 50; i < 100; i++) {
  if (i % 5 === 0) {
    switch (true) {
      case i > 80:
        console.log(i, "LUAR BIASA");
        break;
      case i > 70:
        console.log(i, "BAIK");
        break;
      case i > 60:
        console.log(i, "CUKUP");
        break;
      default:
        console.log(i, "KURANG");
    }
  }
}

// 2. Buatlah deret bilangan Fibonacci sebanyak 20
// 0 1 1 2 3 5 8 … dan seterusnya

console.log("SOAL 2");
let fibbo = [];
let awal = 0,
  akhir = 1,
  selanjutnya;
for (let i = 0; fibbo.length < 20; i++) {
  fibbo.push(awal);
  selanjutnya = awal + akhir;
  awal = akhir;
  akhir = selanjutnya;
}
console.log(fibbo.toString());

// 3. Buatlah tampilan berikut sesuai variable x :
// - Jika variable x=1 maka tampil :
// *
// - Jika variable x=2 maka tampil :
// *
// * *
// - Jika variable x=3 maka tampil :
// *
// * *
// * * *
// - … dan seterusnya

console.log("SOAL 3");
for (let i = 0; i <= 10; i++) {
  console.log("*".repeat(i));
}

// 4. Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
// Contoh : 2234 = Dua Ribu Dua Ratus Tiga Puluh Empat
// 8500 = Delapan Ribu Lima Ratus
// 7001 = Tujuh Ribu Satu

console.log("SOAL 4");
let result = "";
let bilangan = [
  "SATU",
  "DUA",
  "TIGA",
  "EMPAT",
  "LIMA",
  "ENAM",
  "TUJUH",
  "DELAPAN",
  "SEMBILAN",
];
function terbilang(angka) {
  console.log(parseInt(angka.slice(0, 1)));
  if (angka.length === 4) {
    result +=
      bilangan[parseInt(angka.slice(0, 1)) - 1] +
      " RIBU" +
      bilangan[parseInt(angka.slice(1, 2)) - 1] +
      " RATUS";
  }
}
terbilang("3000");
console.log(result);
