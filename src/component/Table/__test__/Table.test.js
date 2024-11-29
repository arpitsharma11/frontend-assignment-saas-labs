import { render, screen } from "@testing-library/react";
import Table from "../index"; // Assuming the component is in Table.js

describe("Table Component", () => {
  const headers = [
    { name: "S. No.", key: "s.no" },
    { name: "Name", key: "name" },
    { name: "Age", key: "age" },
  ];

  const list = [
    { "s.no": 1, name: "John Doe", age: 30 },
    { "s.no": 2, name: "Jane Doe", age: 25 },
  ];

  it("renders table with correct headers", () => {
    render(<Table headers={headers} list={list} />);

    // Check if the table headers are rendered correctly
    headers.forEach(({ name }) => {
      expect(
        screen.getByRole("columnheader", { name: name })
      ).toBeInTheDocument();
    });
  });

  it("renders table rows with correct data", () => {
    render(<Table headers={headers} list={list} />);

    // Check if the table rows and data are rendered correctly
    list.forEach((item) => {
      headers.forEach(({ key }) => {
        expect(screen.getByText(item[key].toString())).toBeInTheDocument();
      });
    });
  });

  it("renders an empty table when list is empty", () => {
    render(<Table headers={headers} list={[]} />);

    // Check if the table body is empty
    const testBody = screen.getByTestId("table-body");
    expect(testBody).toBeEmptyDOMElement();
  });

  it("renders table with correct className", () => {
    render(<Table headers={headers} list={list} />);

    // Check if the table has the correct className
    expect(screen.getByRole("table")).toHaveClass("table");
  });
});
