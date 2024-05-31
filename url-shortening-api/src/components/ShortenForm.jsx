import React, { useState } from "react";
import LinkList from "./UrlList";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("sHoRtUrL");
  const [urlList, setUrlList] = useState([
    { long: "https://wwww.google.com/", short: "sHoRtUrL" },
    { long: "https://wwww.matadornetwork.com/", short: "jIejfLjw3iI" },
    { long: "https://wwww.launchpad.com/", short: "qwytruy" },
    { long: "https://wwww.netflix.com/", short: "qrvwerq" },
  ]);
  const [copied, setCopied] = useState("");

  const handleChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchURL = `${API_URL}?api_token=${API_KEY}`;

    const url = longUrl;
    // FETCH API
    setUrlList((prev) => [{ short: shortUrl, long: longUrl }, ...prev]);
    setLoading(false);
    setLongUrl("");
    console.log(longUrl, "===>", shortUrl);
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
  };

  return (
    <div className="bg-gray-200 px-5 ">
      <div className="-translate-y-16  max-w-[1024px] m-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5 flex flex-col gap-5 rounded-lg bg-primary2 bg-[url('./images/bg-shorten-mobile.svg')] p-5 md:flex-row md:bg-[url('./images/bg-shorten-desktop.svg')] md:p-10">
            <input
              type="text"
              value={longUrl}
              onChange={handleChange}
              placeholder="Shorten a link here..."
              className="w-full rounded-md p-3"
            ></input>
            <button className="text-nowrap rounded-md bg-primary1 p-3 px-10 text-white">
              {loading ? "Shortening" : "Shorten It!"}
            </button>
          </div>
        </form>
        <LinkList urlList={urlList} handleCopy={handleCopy} copied={copied} />
      </div>
    </div>
  );
}
