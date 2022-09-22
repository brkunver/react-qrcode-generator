import Navbar from "./components/Navbar";
import Main from "./components/Main";
import QrCode from "./components/QrCode";
import { useState } from "react";

function App() {
  //url state
  const [url, setUrl] = useState("");

  //get url from input
  const getUrlHandler = (url) => {
    setUrl(url);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <Main getUrl={getUrlHandler}></Main>
          </div>
          <div className="col-12 col-md-6">
            <QrCode url={url}></QrCode>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
