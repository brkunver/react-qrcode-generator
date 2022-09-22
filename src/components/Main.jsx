import { useState } from "react";

const Main = (props) => {
  const [url, setUrl] = useState("");

  const inputHandler = (event) => {
    setUrl(event.target.value)
  }

  const sendUrlHandler = () => {
    if(url.trim() < 1){
      window.alert("please enter valid url")
    }
    else{
      props.getUrl(url)
    }
    
  }

  return (
    <div className="has-text-centered">
      <div className="">
        <h2>Generate QR code</h2>
        <p> Generate QR code from url</p>
        <div className="input-group w-50 mx-auto">
          <input type="url" className="form-control" placeholder="Enter url" onChange={inputHandler} />
        </div>
        <button type="button" className="btn btn-success mt-3" onClick={sendUrlHandler}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Main;
