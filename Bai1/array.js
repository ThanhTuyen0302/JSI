const arr = [1, "123", "abc", 1.3, [1, 2, 3]];
// [POP] ==========================================
// Pop: xoa phan tu cuoi cung cua danh sach => phan tu da xoa
console.group("Pop");
console.log("Pop:", arr.pop());
console.log("After change:", arr);
console.groupEnd();

// [PUSH] ==========================================
// Them 1 phan tu vao cuoi danh sach => do dai cua mang moi nhat
console.group("Push");
console.log("Push:", arr.push());
console.log("After change:", arr);
console.groupEnd();

// [SHIFT] ==========================================
// Xoa phan tu dau tien cua danh sach => phan tu da xoa
console.group("Shift");
console.log("Shift:", arr.shift());
console.log("After change:", arr);
console.groupEnd();

// [UNSHIFT] ==========================================
console.group("Unshift");
console.log("Unshift:", arr.unshift(1238));
console.log("After change:", arr);
console.groupEnd();     

// [LENGTH] ==========================================
// property/ thuộc tính => độ dài mảng
console.log("Độ dài mảng:", arr.length);
