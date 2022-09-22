
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import QrCode from "./components/QrCode";
import { useState } from "react";


function App() {
  const [showSpinner, setShowSpinner] = useState(false)
  const [url, setUrl ] =  useState("")
 
 
  const getUrlHandler = (url) => {
    setShowSpinner(true);
    setUrl(url)
  }
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="container text-center">
        <div className="row" >
          <div className="col-12 col-md-6" >
            <Main getUrl={getUrlHandler}></Main>
          </div>
          <div className="col-12 col-md-6" >
            <QrCode showSpinner={showSpinner} url = {url} ></QrCode>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
