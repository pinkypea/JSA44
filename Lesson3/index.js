// Các toán tử cơ bản
let x = 20;
let y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

let a = 10;
a += 5;
a -= 5;
a *= 5;
a /= 5;
console.log(a);

let b = 10;
let c = 5;
console.log(b > c); // true
console.log(b < c); // false
console.log(b == c); // false

// Toán tử logic
// Toán tử and (&&) trả về true nếu như tất cả điều kiện đều true
let d = 10;
let e = 5;
console.log(d > 5 && e > 5); // false
console.log(d > 0 && e > 0); // true

// Toán tử hoặc (||) trả về false nếu như tất cả điều kiện đều false
console.log(d > 5 || e > 5); // true
console.log(d > 10 || e > 10); // false
console.log(d < 5 || e < 5); // false

// Toán tử NOT (!) để phủ định điều kiện
let f = true;
let g = false;
console.log(!f); // false
console.log(!g); // true

/**
 * CÂU ĐIỀU KIỆN
 */

// Câu điều kiện dạng thiếu
// Nếu điểm bằng 10. In ra thông tin "Bạn là học sinh giỏi".
let score = 10;
if (score == 10) {
    console.log("Bạn là học sinh giỏi");
}

// Câu điều kiện dạng đủ
// Nếu tuổi của bạn lớn hơn hoặc bằng 18. In ra thông tin "Bạn là người trưởng thành".
// nếu không, in ra thông tin "Bạn chưa phải là người trưởng thành".
let age = 20;
if (age >= 18) {
    console.log("Bạn là người trưởng thành");
}
else {
    console.log("Bạn chưa phải là người trưởng thành");
}

// Câu điều kiện dạng đa nhánh
// Nếu giá tiền lớn hơn hoặc bằng 100, in ra "Món đồ này đắt".
// nếu giá tiền lớn hơn 50, in ra "Món đồ này vừa túi tiền".
// nếu không, in ra "Món đồ này rẻ".
let price = 50;
if (price >= 100) {
    console.log("Món đồ này đắt");
}
else if (price < 100 && price > 50) {
    console.log("Món đồ này vừa túi tiền");
}
else {
    console.log("Món đồ này rẻ");
}

/**
 * Vòng lặp
 */
// Vòng lặp for
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log("==== VÒNG LẶP WHILE ====");
let i = 1;
while(i <= 50) {
    console.log(i);
    i++;
}

console.log("==== VÒNG LẶP DO-WHILE ====");
let j = 1;
do {
    console.log(j);
    j++;
} while(j <= 50);

// let my_score = prompt("Nhập điểm của bạn");

/**
 * THỰC HÀNH
 */

// Bài 1:
let number1 = 10;
let number2 = 5;
if (number1 > number2){
    console.log(number1);
}
else if (number2 > number1) {
    console.log(number2);
}
else {
    console.log("Hai số bằng nhau");
}

// Bài 2:
let h = 3;
let l = -7;
let k = 2;
let product = h * l * k;
if (product > 0){
    console.log("Dấu là +");
}
else if (product < 0){
    console.log("Dấu là -");
}
else {
    console.log("Không có dấu");
}

// Bài 3:
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0){
        console.log(i, "là số chẵn");
    }
    else {
        console.log(i, "là số lẻ");
    }
}