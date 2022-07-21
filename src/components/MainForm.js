import { useState } from "react";
import "./MainForm.css";
import CallUrlApi from "./CallUrlApi";

const MainForm = (props) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const originalUrlHandler = (event) => {
    setOriginalUrl(event.target.value);
  };

  const shortUrlHandler = (event) => {
    setShortUrl(event.target.value);
  };

  async function getData(e) {
    e.preventDefault();
    var data = {
      id: 0,
      originalUrl: originalUrl,
      shortUrl: "",
    };
    console.log(data);
    const response = await fetch("https://localhost:44364/api/Urls", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    var testData = await response.json();
    console.log(testData?.shortUrl);
    await setShortUrl(testData?.shortUrl);
  }

  return (
    <form onSubmit={getData}>
      <div className="container">
        <div className="text">
          <label>Please Enter a Url</label>
          <input
            onChange={originalUrlHandler}
            value={originalUrl}
            type="text"
          ></input>
          <CallUrlApi text="Shorten Url" />
        </div>
      </div>
      <div className="link">
        <a href={shortUrl}>{shortUrl}</a>
      </div>
    </form>
  );
};

export default MainForm;
