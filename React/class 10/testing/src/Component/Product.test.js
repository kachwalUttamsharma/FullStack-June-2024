import { render, screen, waitFor } from "@testing-library/react";
import Product from "./Product";

// mocking the fetch function
global.fetch = jest.fn();

describe("Test Cases for Product Component", () => {
  test("render Product Component", () => {
    render(<Product />);
    const getProduct = screen.getByText("Products");
    expect(getProduct).toBeInTheDocument();
  });

  // side effect api => [], [prodcts], error

  test("fetches the data and displays products", async () => {
    const mockedProducts = [
      {
        id: 1,
        title: "Product 1",
        price: 29.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Product 2",
        price: 39.99,
        image: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedProducts,
    });

    render(<Product />);

    await waitFor(() => {
      expect(screen.getAllByRole("img")).toHaveLength(mockedProducts.length);
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("$29.99")).toBeInTheDocument();
      expect(screen.getByText("$39.99")).toBeInTheDocument();
      expect(
        screen.getAllByRole("button", { name: "Add to Card" })
      ).toHaveLength(mockedProducts.length);
    });
  });

  test("testing empty product list", async () => {
    const mockedProducts = [];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedProducts,
    });

    render(<Product />);

    await waitFor(() => {
      expect(
        screen.queryAllByRole("button", { name: "Add to Card" })
      ).toHaveLength(0);
      expect(screen.queryAllByRole("img")).toHaveLength(0);
      expect(screen.getByText("Products")).toBeInTheDocument();
    });
  });

  test("Testing error handling", async () => {
    fetch.mockRejectedValueOnce("Failed to fetch");
    render(<Product />);
    await waitFor(() => {
      expect(
        screen.queryAllByRole("button", { name: "Add to Card" })
      ).toHaveLength(0);
      expect(screen.queryAllByRole("img")).toHaveLength(0);
      expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
    });
  });
});
