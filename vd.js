const buyBtn = document.getElementById("buyBtn");

buyBtn.onclick = function () {
  alert("Cảm ơn bạn đã quan tâm Green Garden!");
};

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};
