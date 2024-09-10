import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { InputProvider } from "../context/inputContext";
import Main from "../components/Main/Main";

jest.mock("../api/getUser", () => ({
  getUser: jest.fn().mockResolvedValue([
    {
      login: "regina",
      id: 1,
      repos_url: ["repo1", "repo2"],
      html_url: "http://example.com",
    },
  ]),
}));

describe("search", () => {
  test("search", async () => {
    render(
      <InputProvider>
        <Main />
      </InputProvider>
    );
    const inputElement = screen.getByTestId("search");
    fireEvent.input(inputElement, { target: { value: "regina" } });

    await waitFor(() => {
      const userItems = screen.getAllByTestId("users");
      expect(userItems.length).toBe(1); 
      expect(userItems[0]).toHaveTextContent("regina");
    });
  });
});
