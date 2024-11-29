import Table from "../Table/index.js";
import { useGetPaginateData } from "./TablePaginationContext.js";

function TableWrapper() {
  const { headers, currentList } = useGetPaginateData();

  return <Table headers={headers} list={currentList} />;
}

export default TableWrapper;
