import { render, screen } from "@testing-library/react";
import TableWrapper from "../TableWrapper";
import TablePaginationProvider from "../TablePaginationContext";

describe("TableWrapper Component", () => {
  const headers = [
    { name: "S. No.", key: "s.no" },
    { name: "Name", key: "name" },
    { name: "Age", key: "age" },
  ];

  const list = [
    { "s.no": 1, name: "John Doe", age: 30 },
    { "s.no": 2, name: "Jane Doe", age: 25 },
    { "s.no": 3, name: "Peter Pan", age: 20 },
  ];

  const size = 5;

  it("renders the table with data from the context", () => {
    render(
      <TablePaginationProvider data={list} headers={headers} size={size}>
        <TableWrapper />
      </TablePaginationProvider>
    );

    headers.forEach(({ name }) => {
      expect(
        screen.getByRole("columnheader", { name: name })
      ).toBeInTheDocument();
    });

    list.forEach((item) => {
      headers.forEach(({ key }) => {
        expect(screen.getByText(item[key].toString())).toBeInTheDocument();
      });
    });
  });

  it("renders an empty table when context data is empty", () => {
    render(
      <TablePaginationProvider data={[]} headers={headers} size={size}>
        <TableWrapper />
      </TablePaginationProvider>
    );

    const testBody = screen.getByTestId("table-body");
    expect(testBody).toBeEmptyDOMElement();
  });
});
