import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "../Button";
import { useGetPaginateData } from "./TablePaginationContext";

function Navigation() {
  const {
    currentPage,
    totalPages,
    prevPage,
    nextPage,
    isNextDisabled,
    isPrevDisabled,
  } = useGetPaginateData();

  return (
    <div className="table__navigation">
      <Button
        className="table__navigation__button"
        onClick={prevPage}
        data-testid="prev-button"
        disabled={isPrevDisabled}
      >
        <ChevronLeft />
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button
        className="table__navigation__button"
        onClick={nextPage}
        data-testid="next-button"
        disabled={isNextDisabled}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Navigation;
