import React, { useEffect, useState } from "react";
import LinkList from "./UrlList";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("sHoRtUrL");
  const [urlList, setUrlList] = useState([]);
  const [copied, setCopied] = useState("");

  // on pageload, check to see if any url list exists in local storage
  useEffect(() => {
    const storedList = localStorage.getItem("urlList");
    if (storedList) setUrlList(JSON.parse(storedList));
  }, []);

  // handle text input
  const handleChange = (e) => {
    setLongUrl(e.target.value);
  };

  // api call when form submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchURL = `${API_URL}?api_token=${API_KEY}`;

    const url = longUrl;
    // FETCH API - post request with original url return tiny_url
    const response = await fetch(fetchURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: url,
      }),
    });
    const { data } = await response.json();

    // set up local storage
    localStorage.setItem(
      "urlList",
      JSON.stringify([{ url: data.url, tiny_url: data.tiny_url }, ...urlList]),
    );

    setUrlList((prev) => [data, ...prev]);
    setLoading(false);
    setLongUrl("");
  };

  // add url to clipboard
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
  };

  return (
    <div className="bg-gray-200 px-5 ">
      <div className="m-auto  max-w-[1024px] -translate-y-16">
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
