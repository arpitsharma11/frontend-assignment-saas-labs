import { useState } from "react";

const usePaginateData = (list, pageSize) => {
  const [currentPage, setCurrenPage] = useState(1);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const currentList = list.slice(start, end);
  const totalPages = Math.ceil(list.length / pageSize);

  const isNextDisabled = currentPage === totalPages;
  const isPrevDisabled = currentPage === 1;

  const nextPage = () => {
    if (isNextDisabled) return;
    setCurrenPage(currentPage + 1);
  };
  const prevPage = () => {
    if (isPrevDisabled) return;
    setCurrenPage(currentPage - 1);
  };

  return {
    currentList,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    isNextDisabled,
    isPrevDisabled,
  };
};

export default usePaginateData;
