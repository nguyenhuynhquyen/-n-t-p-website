/* console.log("Hello Javascript");
console.log("Quyên");
console.log("Javascript");
console.log("Làm được một website"); */
//Khai báo biến
/* let name = "Quyên";
console.log(name);
let nganh = "CNTT";
console.log(nganh);
let muctieu =
  "Cố gắng học hành ra trường có được một công việc ổn định để phụ giúp cho ba mẹ";
console.log(muctieu);
 */
/* let diem = "8";
console.log(diem);
diem = "5";
console.log(diem);
 */
/* let a = "20";
let b = 20;
let c = false;
let d = "false";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
 */
/* let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);
 */
/* function tinhTong(a, b) {
  console.log(a + b);
}

tinhTong(2, 3);
tinhTong(10, 5); */
/* let diem = [4, 7, 8, 3, 9];

let diemDat = diem.filter(function (d) {
  return d >= 5;
});

console.log(diemDat);
 */
/* let gia = [50000, 120000, 80000, 200000, 30000, 150000];
let giare = [];
for (let i = 0; i < gia.length; i++) {
  if (gia[i] < 100000) {
    giare.push(gia[i]);
  }
}
console.log(giare); */
let so = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sochan = [];

let sole = [];

for (let i = 0; i < so.length; i++) {
  if (so[i] % 2 == 0) {
    sochan.push(so[i]);
  } else sole.push(so[i]);
}
console.log(sochan);
console.log(sole);
