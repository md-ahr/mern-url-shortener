import axios from "axios";
import { useState, SyntheticEvent, useRef } from "react";

const AddUrl = () => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [showShortUrl, setShowShortUrl] = useState(false);
  const [resData, setResData] = useState({
    urlId: '',
    originalUrl: '',
    shortUrl: '',
  });

  const btnRef: any = useRef();

  const handleUrlChange = (e: any) => {
    setUrl(e.target.value);
    if (/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)) {
      setIsValidUrl(true);
    } else {
      setIsValidUrl(false);
    }
  }

  const getUrls = async () => await axios.get('/urls/all');

  const generateShortUrl = async () => {
    const response = await axios.post('/urls/short', { originalUrl: url });
    const { data }  = response || {};
    if (Object.keys(data).length > 0) {
      setResData(data);
      getUrls();
      setShowShortUrl(true);
    } else {
      setShowShortUrl(false);
    }
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    generateShortUrl();
    setUrl('');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resData.shortUrl);
    btnRef.current.textContent = 'Copied';
    btnRef.current.style.backgroundColor = '#20cf6f';
  }

  return (
    <div className="mt-12 mx-auto w-[40%] bg-white rounded-sm shadow">
      <form className="p-8 w-full flex" onSubmit={handleSubmit}>
        <div className="w-3/4">
          <input
            type="text"
            name="url"
            id="url"
            className={`px-5 py-3 w-full border border-slate-300 rounded ${!isValidUrl && 'border-red-500 outline-0'}`}
            placeholder="Enter a valid url"
            value={url}
            onChange={handleUrlChange}
          />
          {!isValidUrl && <span className="text-sm text-red-500">Please provide a valid url</span>}
        </div>
        <div className="ml-6 w-1/4">
          <button
            type="submit"
            className={`px-9 py-[14px] text-sm text-white font-medium bg-teal-500 border rounded hover:bg-teal-400 transition duration-300 ease ${(!url || !isValidUrl) && 'cursor-not-allowed bg-teal-400'}`}
            disabled={!url || !isValidUrl}
          >
            Submit
          </button>
        </div>
      </form>
      {showShortUrl && (
        <div className="py-4 text-center border-t bg-slate-100">{resData.shortUrl}
          <button
            type="button"
            className="ml-4 px-4 py-2 text-sm border rounded text-white bg-slate-600"
            onClick={copyToClipboard}
            ref={btnRef}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUrl;
