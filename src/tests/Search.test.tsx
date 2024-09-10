import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search/Search";
import { InputProvider } from "../context/inputContext";

describe("search", () => {
  test("search", () => {
    render(
      <InputProvider>
        <Search />
      </InputProvider>
    );
    const inputElement = screen.getByPlaceholderText(/Поиск/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("search", () => {
    render(
      <InputProvider>
        <Search />
      </InputProvider>
    );
    const inputElement = screen.getByPlaceholderText(/Поиск/i);
    expect(screen.queryByTestId("search")).toContainHTML("");
    fireEvent.input(inputElement, { target: { value: "123" } });
    expect(screen.queryByTestId("search")).toContainHTML("123");
  });
});
