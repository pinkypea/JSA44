// alert("Chào mừng các bạn đến với buổi học số 2");
console.log("Chào mừng các bạn đến với buổi học số 2");



let winners = 2;
// let name = "Duke";
let isEligible = false;

let first_name = "Kien";
let last_name = "Dao";

// Cú pháp khởi tạo biến
// const dùng để tạo biến không thể thay đổi giá trị
const PI = 3.14;

// let dùng để tạo biến cục bộ (local variable)
// {
//     let a = 10;
//     console.log(a);
// }
// let d = a + 20;
// console.log(a);

// var dùng để tạo biến toàn cục (global variable)
{
    var b = 50;
    console.log(b);
}
var c = b + 50;

// JS Data types
// Number
let age = 25;
let price = 99.99;

// String
let name = "John";
let school = "Havard";

// Boolean
let isPass = true;
let hasCompleted = false;

// Null
let selectedItem = null;

// Undefined
let result;

// Thao tác với string
// 1. Thao tác gộp chuỗi với toán tử +
let firstName = "Kiên";
let lastName = "Đào";

let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Đếm số ký tự trong chuỗi
let str = "Hello World";
console.log("Số ký tự trong chuỗi là:", str.length);

// 3. Tách chuỗi bằng split()
let data = "apple,banana,orange";
let subString = data.split(",");
console.log(subString);

// 4. Viết chuỗi in hoa
let text = "hello world";
let upperText = text.toUpperCase();
console.log(upperText);

// 5. Viết chuỗi in thường
let text1 = "HELLO WORLD";
let lowerText = text1.toLowerCase();
console.log(lowerText);

// 6. Loại bỏ khoảng trắng thừa
let text2 = "     Hello World     ";
let trimmedText = text2.trim();
console.log(trimmedText);
console.log("Độ dài của chuỗi ban đầu:", text2.length);
console.log("Độ dài của chuỗi sau khi bỏ khoảng trắng:", trimmedText.length)

// Bài thực hành
// 1.
// 2. Cho chuỗi "    Đỏ,Xanh,Vàng,Lục,Lam,Chàm,Tím    ".
// - Dọn dẹp các khoảng trắng thừa
// - Chuyển các màu sắc này thành in hoa
// - Tách chuỗi thành 1 danh sách.
// - In danh sách đó ra cửa sổ console
let color = "    Đỏ,Xanh,Vàng,Lục,Lam,Chàm,Tím    ";
let trimmedColor = color.trim();
let upperColor = trimmedColor.toUpperCase();
let listColor = upperColor.split(",");
console.log(listColor);