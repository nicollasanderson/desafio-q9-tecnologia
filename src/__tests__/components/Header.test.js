import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useNavigate: () => mockHistory,
}));

describe("Header Component", () => {
  test("should be able to render Header", () => {
    render(<Header />);
    expect(screen.getByText("Q9 Pets")).toBeTruthy();
  });
});
