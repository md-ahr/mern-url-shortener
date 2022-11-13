import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import useFetch from '../../hooks/useFecth';

interface UrlResponse {
  _id: string,
  urlId: string,
  originalUrl: string,
  shortUrl: string,
  clicks: number,
  createdAt: string,
  updatedAt: string
};

const Table = () => {
  const { loading, error, result } = useFetch('/urls/all', 'GET');
  const { urls }: any = result || [];

  const data = useContext(DataContext) || {};

  console.log(data.total);
  

  return (
    <table className="w-full text-sm text-left text-gray-500 break-all dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            ID
          </th>
          <th scope="col" className="py-3 px-6">
            Original URL
          </th>
          <th scope="col" className="py-3 px-6">
            Short URL
          </th>
          <th scope="col" className="py-3 px-6">
            Click Count
          </th>
          <th scope="col" className="py-3 px-6">
            Created Date
          </th>
        </tr>
      </thead>
      <tbody>
        {data.urls.length > 0 ? (<>
          {data.urls && data.urls.length > 0 && data.urls.map((u: UrlResponse) => (
            <tr key={u._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {u._id}
              </td>
              <td className="py-4 px-6">
                {u.originalUrl}
              </td>
              <td className="py-4 px-6">
                {u.shortUrl}
              </td>
              <td className="py-4 px-6">
                {u.clicks}
              </td>
              <td className="py-4 px-6">
                {u.createdAt}
              </td>
            </tr>
          ))}
        </>) : (<>
          {urls && urls.length > 0 && urls.map((u: UrlResponse) => (
            <tr key={u._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {u._id}
              </td>
              <td className="py-4 px-6">
                {u.originalUrl}
              </td>
              <td className="py-4 px-6">
                {u.shortUrl}
              </td>
              <td className="py-4 px-6">
                {u.clicks}
              </td>
              <td className="py-4 px-6">
                {u.createdAt}
              </td>
            </tr>
          ))}
        </>)}
      </tbody>
    </table>
  );
};

export default Table;
