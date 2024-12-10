let sayilar = [];
let tekSayilar = [];
let ciftSayilar = [];

for (let i = 0; i < 10; i++) {
    let sayi = parseInt(prompt("Bir sayı girin:"));
    sayilar.push(sayi);
}

for (let sayi of sayilar) {
    if (sayi % 2 === 0) {
        ciftSayilar.push(sayi);
    } else {
        tekSayilar.push(sayi);
    }
}

console.log("Girilen sayılar:", sayilar);
console.log("Çift sayılar:", ciftSayilar);
console.log("Tek sayılar:", tekSayilar);
