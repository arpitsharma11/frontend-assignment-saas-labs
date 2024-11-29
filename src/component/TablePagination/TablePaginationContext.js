import { createContext, useContext, useMemo } from "react";

import usePaginateData from "../../hooks/usePaginateData";

const TablePaginationContext = createContext("");

function TablePaginationProvider({ children, data, headers, size }) {
  const {
    currentList,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    isNextDisabled,
    isPrevDisabled,
  } = usePaginateData(data, size);

  const value = useMemo(
    () => ({
      headers,
      currentList,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      isNextDisabled,
      isPrevDisabled,
    }),
    [
      headers,
      currentList,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      isNextDisabled,
      isPrevDisabled,
    ]
  );

  return (
    <TablePaginationContext.Provider value={value}>
      {children}
    </TablePaginationContext.Provider>
  );
}

function useGetPaginateData() {
  const value = useContext(TablePaginationContext);

  return value;
}

export default TablePaginationProvider;
export { useGetPaginateData };
