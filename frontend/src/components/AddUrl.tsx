import { useState, SyntheticEvent } from "react";

const AddUrl = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setUrl('');
    console.log(url);
  }

  return (
    <div className="mt-12 mx-auto w-[40%] bg-white rounded-sm shadow">
      <form className="p-8 w-full flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          id="url"
          className="px-5 py-3 w-3/4 border border-slate-300 rounded"
          placeholder="Enter a valid url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="ml-6 w-1/4">
          <button
            type="submit"
            className={`px-9 py-[14px] text-sm text-white font-medium bg-teal-500 border rounded hover:bg-teal-400 transition duration-300 ease ${!url && 'cursor-not-allowed bg-teal-400'}`}
            disabled={!url}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUrl;
