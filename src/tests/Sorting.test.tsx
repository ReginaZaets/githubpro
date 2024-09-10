import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Sorting from "../components/Sorting/Sorting";
import { User } from "../components/Main/Main";

const mockUsers: User[] = [
  {
    login: "user1",
    id: 1,
    repos_url: "repo1",
    html_url: "http://example.com/user1",
  },
  {
    login: "user2",
    id: 2,
    repos_url: "repo2",
    html_url: "http://example.com/user2",
  },
];

const mockOnSortingChange = jest.fn();

describe("меню", () => {
  test("бургер", async () => {
    render(
      <Sorting sortingUsers={mockUsers} onSortingChange={mockOnSortingChange} />
    );

    const toggleBurger = screen.getByTestId("sorting");
    fireEvent.click(toggleBurger);

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument();
    });

    fireEvent.click(toggleBurger);

    await waitFor(() => {
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
  });
});
