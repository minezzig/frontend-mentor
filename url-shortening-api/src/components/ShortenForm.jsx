import { useEffect, useState } from "react";
import LinkList from "./UrlList";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [urlList, setUrlList] = useState([]);
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");

  // on pageload, check to see if any url list exists in local storage
  useEffect(() => {
    const storedList = sessionStorage.getItem("urlList");
    if (storedList) setUrlList(JSON.parse(storedList));
  }, []);

  // handle text input
  const handleChange = (e) => {
    setError(false);
    setLongUrl(e.target.value);
  };

  // api call when form submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    // error for no input
    if (!longUrl.length) {
      setError("Please add a link");
      return;
    }
    const pattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
  
   if(!pattern.test(longUrl)) {
    setError("Not valid URL")
    return;
   }

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


      const {data} = await response.json();
   

    // set up local storage
    sessionStorage.setItem(
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
    <section className="bg-gray-200 px-5 py-0">
      <div className="m-auto  max-w-[1024px] -translate-y-16">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5 flex flex-col gap-5 rounded-lg bg-primary2 bg-[url('/images/bg-shorten-mobile.svg')] p-5 md:flex-row md:bg-[url('/images/bg-shorten-desktop.svg')] md:p-10">
            <div className="flex flex-col w-full relative">
              <input
                type="text"
                value={longUrl}
                onChange={handleChange}
                onFocus={() => setLongUrl("")}
                placeholder="Shorten a link here..."
                className={`w-full outline-none rounded-md p-3 ${error ? " outline outline-4 outline-red-400" : ""} active:outline-none`}
              ></input>
              {error && (
                <p className="mt-2 md:-bottom-6 md:absolute text-xs italic text-red-400">{error}</p>
              )}
            </div>
            <button className="text-nowrap rounded-md bg-primary1 p-3 px-10 text-white">
              {loading ? "Shortening" : "Shorten It!"}
            </button>
          </div>
        </form>
        <LinkList urlList={urlList} handleCopy={handleCopy} copied={copied} />
      </div>
    </section>
  );
}
