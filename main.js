import './style.css'

import QRCode from "qrcode"

const qrCanvas = document.getElementById("qr")



setInterval(() => {
  QRCode.toCanvas(qrCanvas, Date())
}, 1000);