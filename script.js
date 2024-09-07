const inputBar = document.getElementById("input");
const buttonBar = document.getElementById("button");
const qrcodeimg = document.getElementById("qr-img");

// console.log(inputBar,buttonBar,qrcodeBar)

buttonBar.addEventListener("click", () => {
  let inputValue = inputBar.value;

  if (!inputValue) {
    alert("Please Enter valid url or Text");
    return;
  } else {
    // qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrcodeimg.alt = `QR code for ${inputValue}`;
    inputBar.value = ""; // Reset input value
  }
});
