import { useState } from "react";

const Main = (props) => {
  //input url
  const [url, setUrl] = useState("");

  //on input change get input
  const inputHandler = (event) => {
    setUrl(event.target.value);
  };

  //simple check for valid url
  const sendUrlHandler = () => {
    if (url.trim() < 1) {
      window.alert("please enter valid url");
    } else {
      props.getUrl(url);
    }
  };

  return (
    <div className="has-text-centered card ">
      <div className="card-body">
        <h2 className="card-title">Generate QR code</h2>
        <p> Generate QR code from url</p>
        <div className="input-group w-50 mx-auto">
          <input
            type="url"
            className="form-control"
            placeholder="Enter url"
            onChange={inputHandler}
          />
        </div>
        <button
          type="button"
          className="btn btn-success mt-3 mb-2"
          onClick={sendUrlHandler}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Main;
