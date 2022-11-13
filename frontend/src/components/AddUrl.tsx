import axios from 'axios';
import { useState, SyntheticEvent, useRef, useContext } from 'react';
import { DataContext, DataDispatchContext } from '../context/DataContext';

const AddUrl = () => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [showShortUrl, setShowShortUrl] = useState(false);

  const btnRef: any = useRef();

  const urls = useContext(DataContext) || {};
  const dispatch = useContext(DataDispatchContext);

  const handleUrlChange = (e: any) => {
    setUrl(e.target.value);
    if (/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)) {
      setIsValidUrl(true);
    } else {
      setIsValidUrl(false);
    }
  }

  const generateShortUrl = async () => {
    const response = await axios.post('/urls/short', { originalUrl: url });
    const { data }  = await response || {};
    return data;
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { isSuccess, url } = await generateShortUrl();
    if (isSuccess) {
      dispatch({ type: 'GENERATE_URL', value: url });
      setShowShortUrl(true);
    } else {
      setShowShortUrl(false);
    }
    setUrl('');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(urls.urls[0].shortUrl);
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
        <div className="py-4 text-center border-t bg-slate-100">{urls.urls[0].shortUrl}
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
