/**
 * ARRAY
 */
// Khai báo array
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4];
let mix_array = ["Khánh", 1, 2, true, null];

// Khai báo array rỗng
let empty_array = [];

let arr = [1, 2, 'three', true, null];
// Truy vấn array
console.log(arr[1]);

let danh_sach_hoc_sinh = ["Khánh", "Hấu", "Đại", "Lâm"];
for (let i = 0; i < danh_sach_hoc_sinh.length; i++){
    console.log(danh_sach_hoc_sinh[i]);
}

// Thêm phần tử vào array
let arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1);

// Cập nhật phần tử
let arr2 = [1, 2, 3, 4];
arr2[2] = 10;
console.log(arr2);

arr2.splice(1, 0, 100);
console.log(arr2);

// Tìm kiếm phần tử
let arr3 = ["samsung", "apple", "oppo", "lenovo"];
console.log(arr3.indexOf("samsung"));
console.log(arr3.indexOf("lenovo"));
console.log(arr3.indexOf("nokia"));

// Xóa phần tử
let arr4 = ['a', 'b', 'c', 'd'];
arr4.splice(1, 2);
console.log(arr4);

/** OBJECT
 * 
 */

// Khai báo object
let student = {
    firstName: "Kiên",
    lastName : "Đào",
    age: 20,
    hometown: "Hanoi"
}

// Truy vấn object
console.log(student.firstName);
console.log(student["firstName"]);

// Duyệt object
for (let key in student){
    // Thực hiện thao tác từng thuộc tính
}

// Thêm giá trị mới vào object
student.gender = "male";
console.log(student);

// Tìm kiếm key
if ("age" in student){
    console.log("Key 'age' có trong object student");
}

if (student.hasOwnProperty("job")){
    console.log("Key 'job' có trong object student");
}

// Xóa key trong object
delete student.age;
console.log(student);

// Thực hành
let hoc_sinh = [
    {ten: "An", tuoi: 15, lop: "10A1"},
    {ten: "Bình", tuoi: 16, lop: "11A2"},
    {ten: "Châu", tuoi: 15, lop: "10A1"}
]

// Yêu cầu 1
hoc_sinh.push({ten: "Dũng", tuoi: 17, lop: "11A3"});

// Yêu cầu 2
for (let i = 0; i < hoc_sinh.length; i++){
    console.log(`Tên: ${hoc_sinh[i].ten}; Tuổi: ${hoc_sinh[i].tuoi}; Lớp: ${hoc_sinh[i].lop}`);
}

// Yêu cầu 3
for (let i = 0; i < hoc_sinh.length; i++){
    if (hoc_sinh[i].ten == 'Bình'){
        hoc_sinh[i].tuoi = 17;
    }
}

// Yêu cầu 4
hoc_sinh.splice(2, 1);

/**
 * DOM
 */

// alert("Đăng nhập thành công");
// Cách để lấy các phần tử HTML sang JS
let heading1 = document.getElementById("heading-1");
let heading2 = document.getElementsByClassName("heading-1");
let heading3 = document.getElementsByTagName("h1");

let heading4 = document.querySelector(".heading-1");


let container = document.getElementById("container");
let new_element = document.createElement("div"); // Tạo phần tử mới

new_element.innerHTML = "<p>Đây là 1 đoạn văn</p>"; // Tạo nội dung mới cho phần tử

container.appendChild(new_element); // Thêm 1 phần tử con vào phần tử mẹ

// Đặt màu cho phần tử
container.style.backgroundColor = "red";