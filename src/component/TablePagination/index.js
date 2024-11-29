import usePaginateData from "../../hooks/usePaginateData";
import TableWrapper from "./TableWrapper";
import Navigation from "./Navigation";
import TablePaginationProvider from "./TablePaginationContext";

function TablePagination({ data, headers, size }) {
  const { currentPage, totalPages, nextPage, prevPage } = usePaginateData(
    data,
    5
  );

  return (
    <TablePaginationProvider data={data} headers={headers} size={size}>
      <div className="table-container">
        <TableWrapper />
        <Navigation
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </TablePaginationProvider>
  );
}

export default TablePagination;
