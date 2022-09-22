import { useRef } from "react";
import  QRCode  from "qrcode";

const QrCode = (props) => {
  let qrCanvas = useRef("");

  let content = (
    <div className="mt-2">
      <canvas ref={qrCanvas}></canvas>
    </div>
  );

  if(props.url !== ""){
    QRCode.toCanvas(qrCanvas.current,props.url,{scale : 7})
  }

  return content;
};

export default QrCode;
