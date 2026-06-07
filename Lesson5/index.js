/**
 * FUNCTION
 */

// Viết hàm để tính tổng 2 số
function get_sum(number1, number2) {
    let sum = number1 + number2;
    console.log(sum);
}

get_sum(5, 3);

let number1 = 10;
let number2 = 20;
get_sum(number1, number2);

let a = 50;
let b = 100;
get_sum(a , b);

// Hàm không có giá trị trả về
function get_area(height, width){
    let S = height * width;
    console.log(S);
}

// Hàm có giá trị trả về
function get_perimeter(height, width){
    let P = (height + width) * 2;
    return P;
}

let result = get_perimeter(5, 3);
console.log(result);

// Bài 1:
function tinh_tong(n){
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

let result1 = tinh_tong(5);
console.log(result1);

// Bài 2:
function la_so_nguyen_to(num){
    let check = true;
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            check = false;
            break;
        }
    }
    if (check){
        console.log(num, "là số nguyên tố");
    }
    else {
        console.log(num, "không là số nguyên tố");
    }
}

la_so_nguyen_to(31);

// Bài 4:
function convert_C_to_F(C){
    let F = C * 1.8 + 32;
    return F;
}

/**
 * LOCAL STORAGE
 */

