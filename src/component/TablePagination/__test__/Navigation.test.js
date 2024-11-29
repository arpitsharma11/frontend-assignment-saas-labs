import { render, screen, fireEvent } from "@testing-library/react";
import { useGetPaginateData } from "../TablePaginationContext";
import Navigation from "../Navigation";

jest.mock("../TablePaginationContext", () => ({
  useGetPaginateData: jest.fn(),
}));

describe("Navigation Component", () => {
  test("renders navigation with correct current page and total pages", () => {
    useGetPaginateData.mockReturnValue({
      currentPage: 3,
      totalPages: 10,
      prevPage: jest.fn(),
      nextPage: jest.fn(),
      isNextDisabled: false,
      isPrevDisabled: false,
    });

    render(<Navigation />);

    const pageInfo = screen.getByText("3 / 10");
    expect(pageInfo).toBeInTheDocument();
  });

  test("disables prev button when isPrevDisabled is true", () => {
    useGetPaginateData.mockReturnValue({
      currentPage: 1,
      totalPages: 10,
      prevPage: jest.fn(),
      nextPage: jest.fn(),
      isNextDisabled: false,
      isPrevDisabled: true,
    });

    render(<Navigation />);

    const prevButton = screen.getByTestId("prev-button");
    expect(prevButton).toBeDisabled();
  });

  test("disables next button when isNextDisabled is true", () => {
    useGetPaginateData.mockReturnValue({
      currentPage: 10,
      totalPages: 10,
      prevPage: jest.fn(),
      nextPage: jest.fn(),
      isNextDisabled: true,
      isPrevDisabled: false,
    });

    render(<Navigation />);

    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeDisabled();
  });

  test("calls prevPage function when prev button is clicked", () => {
    const mockPrevPage = jest.fn();
    useGetPaginateData.mockReturnValue({
      currentPage: 3,
      totalPages: 10,
      prevPage: mockPrevPage,
      nextPage: jest.fn(),
      isNextDisabled: false,
      isPrevDisabled: false,
    });

    render(<Navigation />);

    const prevButton = screen.getByTestId("prev-button");
    fireEvent.click(prevButton);
    expect(mockPrevPage).toHaveBeenCalledTimes(1);
  });

  test("calls nextPage function when next button is clicked", () => {
    const mockNextPage = jest.fn();
    useGetPaginateData.mockReturnValue({
      currentPage: 3,
      totalPages: 10,
      prevPage: jest.fn(),
      nextPage: mockNextPage,
      isNextDisabled: false,
      isPrevDisabled: false,
    });

    render(<Navigation />);

    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);
    expect(mockNextPage).toHaveBeenCalledTimes(1);
  });
});
