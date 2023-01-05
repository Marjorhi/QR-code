var script = document.createElement("script");
script.src =
  "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
document.head.appendChild(script);

const qrcode = document.querySelectorAll(".qrcode-cont button");
qrcode.forEach((el, index) => {
  el.addEventListener("click", handleOnClickQrCode);
});

function handleOnClickQrCode(e) {
  var divCont = e.target.parentNode;

  if (divCont.children[0].value == "") return;
