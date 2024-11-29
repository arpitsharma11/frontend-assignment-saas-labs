import { render, screen, fireEvent } from "@testing-library/react";
import TablePagination from "../index";
import usePaginateData from "../../../hooks/usePaginateData";

jest.mock("../../../hooks/usePaginateData", () => jest.fn());

describe("TablePagination Component", () => {
  const headers = [
    { name: "S. No.", key: "s.no" },
    { name: "Name", key: "name" },
    { name: "Age", key: "age" },
  ];

  const data = [
    { "s.no": 1, name: "John Doe", age: 30 },
    { "s.no": 2, name: "Jane Doe", age: 25 },
    { "s.no": 3, name: "Peter Pan", age: 20 },
    { "s.no": 4, name: "Alice", age: 28 },
    { "s.no": 5, name: "Bob", age: 35 },
  ];

  const size = 2;

  it("renders the table, navigation, and provides context", () => {
    usePaginateData.mockReturnValue({
      currentList: data.slice(0, size),
      currentPage: 1,
      totalPages: 3,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
      isNextDisabled: false,
      isPrevDisabled: true,
    });

    render(<TablePagination data={data} headers={headers} size={size} />);

    expect(screen.getByRole("table")).toBeInTheDocument();

    const prevButton = screen.getByTestId("prev-button");
    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
  });
});
