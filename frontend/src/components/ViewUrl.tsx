import Filter from "./DataTable/Filter";
import Pagination from "./DataTable/Pagination";
import Search from "./DataTable/Search";
import Table from "./DataTable/Table";

const ViewUrl = () => {
  return (
    <div className="mt-12 p-8 relative bg-white shadow">
      <div className="flex justify-between items-center pb-4">
        <Filter />
        <Search />
      </div>
      <Table />
      <Pagination />
    </div>
  );
};

export default ViewUrl;
