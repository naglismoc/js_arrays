
// for (let i = 0; i < 10; i++) {
//     console.log("labas" + i);
// }

// console.log("kitas kodas");

// let i = 0;

// let shouldContinue1 = true;

// for (;shouldContinue1;) {
//     console.log(i);
//     if (i > 50) {
//         shouldContinue1 = false;
//     }
//     i += 3;
// }

// let shouldContinue2 = true;

// console.log("-------------------");
// while (shouldContinue2) {
//     let randomNumber = Math.random() * 100;
//     console.log(randomNumber);
//     if (randomNumber > 75) {
//         shouldContinue2 = false;
//     }
// }

// for (let i = 0; i <= 20; i+=4) { // kaskelinta iteracija
//     console.log(i);
// }

// for (let i = 5; i <= 10; i++) { // <= galimas, kaip ir <. tik bus paimama viena iteracija daugiau
//     console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) { // i = 0, i = 1;
//     console.log("---" + i+"-a iteracija isorinio ciklo");
//     for (let a = 0; a < 5; a++) { // a = 0, a = 1,2,3,4 a = 0,1,2,3,4,5
//       console.log("i = " + i + ", a = " + a);
//     }
// }
//             0        1       2     <- poziciju indexai
let arr = ['pirmas','antras','trecias'];
let cars = ["Saab", "Volvo", "BMW"];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log("--masyvo atvaizdavimas su ciklu---");

let count = 0;
for (let i = 0; i < arr.length; i++) {

    const num = arr[i];
    console.log(num);
    
}

let arr2d = [arr, cars];
console.log(arr2d);
console.log(arr2d[1][2]);
const carsArr = arr2d[1];
console.log(carsArr[2]);

console.log(7 % 3); // 7 -3 = 4, 4 - 3 = 1,  =1
console.log(14 % 4); // 14 - 4 = 10, 10 - 4 = 6, 6 - 4 = 2, =2
console.log(11951981982 % 2 == 0); // budas nustatyti ar skaicius yra porinis