const container =document.querySelector (".container"),
qrInput = container.querySelector(".form input"),
generateBtn =container.querySelector (".form button"),
qrImg = container.querySelector (".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando um código QR..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar código QR"
        container.classList.add("active");
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active");
    }
});

console.log
