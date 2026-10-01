let tieude = document.querySelector("#title");
let nhap = document.querySelector("#nhap");
let mau = document.querySelector("#color");
let noibat = document.querySelector("#highlight");
let ketqua = document.querySelector("#result");
let chao = document.querySelector("#hello");
let ankhoahoc = document.querySelector(".btn");
let ankhoahoc2 = document.querySelector(".btn2");
let ankhoahoc3 = document.querySelector(".btn3");
let khoahoc1 = document.querySelector(".list-course");
let khoahoc2 = document.querySelector(".list-course2");
let khoahoc3 = document.querySelector(".list-course3");
let hienkhoahoc = document.querySelector(".hien");
let themkhoahoc = document.querySelector(".them");
mau.addEventListener("click", function () {
  tieude.style.color = "blue";
});
chao.addEventListener("click", function () {
  ketqua.textContent = "Xin chào " + nhap.value;
});
noibat.addEventListener("click", function () {
  tieude.classList.toggle("active");
});
ankhoahoc.addEventListener("click", function () {
  khoahoc1.style.display = "none";
});
ankhoahoc2.addEventListener("click", function () {
  khoahoc2.style.display = "none";
});
ankhoahoc3.addEventListener("click", function () {
  khoahoc3.style.display = "none";
});
hienkhoahoc.addEventListener("click", function () {
  khoahoc1.style.display = "inline-block";
  khoahoc2.style.display = "inline-block";
  khoahoc3.style.display = "inline-block";
});
themkhoahoc.addEventListener("click", function () {
  let p = document.createElement("p");
});
