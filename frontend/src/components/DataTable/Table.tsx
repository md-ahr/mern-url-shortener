const Table = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            cssafsa5fd4sa5df4sad5
          </td>
          <td className="py-4 px-6">
            https://www.rokomari.com/book/category/56
          </td>
          <td className="py-4 px-6">
            http://localhost/3SDF5A
          </td>
          <td className="py-4 px-6">
              0
          </td>
          <td className="py-4 px-6">
            17th November, 2022
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            cssafsa5fd4sa5df4sad5
          </td>
          <td className="py-4 px-6">
            https://www.rokomari.com/book/category/56
          </td>
          <td className="py-4 px-6">
            http://localhost/3SDF5A
          </td>
          <td className="py-4 px-6">
              0
          </td>
          <td className="py-4 px-6">
            17th November, 2022
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
