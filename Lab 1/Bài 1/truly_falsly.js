/**
 * Các dữ liệu -> convert boolean -> reture false
 * 1. "" (chuỗi rỗng)
 * 2. 0 (số 0)
 * 3. flase
 * 4. null (**LƯU Ý: typeof null -> object)
 * 5. underfined
 * 6. NaN
 */

// ----------------------------------------
// vd1: Danh sách rỗng/ object rỗng (-> true)
const empty_list = [];
if (empty_list.length) {
    // 0 -> false 
    console.log("Empty_list had length > 0")
} else if (empty_list) {
    console.log("Had empty_list"); // run this code 
}

// ----------------------------------------
// vd2: kiểm tra biến có tồn tại (load api) - sử dụng toán tử 3 ngôi
const none_list = undefined;

const none_var = none_list ? none_list : "None list is not defined";
console.log(none_var);
// ghi lai code (if)
if (none_list) console.log(none_list);
else console.log("None list is not defined");
// su dung so sanh (|| &&)
const ss = none_list || null;
console.log(ss);

// ----------------------------------------
// KIỂU DỮ LIỆU
console.log(typeof 0.0); // 'number'
console.log(typeof NaN); // 'number'
// chuyen thanh number
console.log(parseInt("123.6")); // 123 -> lam tron xuong
console.log(parseFloat("123.6")); // 123.6

console.log(typeof "123.6"); // string
// chuyen thanh string
console.log(String(true)); // "true"
console.log()



consol




console.log(Boolean(O)); // false
console.log(Boolean([])); // true

