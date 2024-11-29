import { render, screen } from "@testing-library/react";
import TablePaginationProvider, {
  useGetPaginateData,
} from "../TablePaginationContext";
import usePaginateData from "../../../hooks/usePaginateData";

jest.mock("../../../hooks/usePaginateData", () => jest.fn());

describe("TablePaginationProvider Component", () => {
  const headers = [
    { name: "S. No.", key: "s.no" },
    { name: "Name", key: "name" },
    { name: "Age", key: "age" },
  ];

  const data = [
    { "s.no": 1, name: "John Doe", age: 30 },
    { "s.no": 2, name: "Jane Doe", age: 25 },
    { "s.no": 3, name: "Peter Pan", age: 20 },
  ];

  const size = 2;

  it("provides the correct values to its children", () => {
    usePaginateData.mockReturnValue({
      currentList: data.slice(0, size),
      currentPage: 1,
      totalPages: 2,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
      isNextDisabled: false,
      isPreusePaginateDatavDisabled: true,
    });
    render(
      <TablePaginationProvider data={data} headers={headers} size={size}>
        <TestComponent />
      </TablePaginationProvider>
    );

    expect(screen.getByText("Page: 1")).toBeInTheDocument();
    expect(screen.getByText("Total Pages: 2")).toBeInTheDocument();
  });
});

function TestComponent() {
  const { headers, currentList, currentPage, totalPages } =
    useGetPaginateData();

  return (
    <div>
      <p>Page: {currentPage}</p>
      <p>Total Pages: {totalPages}</p>
    </div>
  );
}
