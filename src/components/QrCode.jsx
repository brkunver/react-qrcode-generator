import { useRef } from "react";
import QRCode from "qrcode";

const QrCode = (props) => {
  //get canvas dom element
  let qrCanvas = useRef("");

  //create qr code
  if (props.url !== "") {
    QRCode.toCanvas(qrCanvas.current, props.url, { scale: 7 });
  }

  return (
    <div>
      <canvas ref={qrCanvas}></canvas>
    </div>
  );
};

export default QrCode;
