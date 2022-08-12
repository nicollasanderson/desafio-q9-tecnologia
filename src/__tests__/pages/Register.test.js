import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../../pages/Register";
import userEvent from "@testing-library/user-event";

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useNavigate: () => mockHistory,
}));

describe("Register Page", () => {
  test("should be able to render register page", () => {
    render(<Register />);

    const emailField = screen.getByPlaceholderText("Seu melhor email");
    const buttonElement = screen.getByText("Registrar");
    const q9 = screen.getByText("Q9 Pets");

    fireEvent.change(emailField, { target: { value: "teste@teste.com" } });

    expect(emailField).toHaveValue("teste@teste.com");
    expect(buttonElement).toHaveTextContent("Registrar");
    expect(q9).toBeInTheDocument();
  });

  test("should render error when using invalid email", async () => {
    render(<Register />);

    const emailField = screen.getByPlaceholderText("Seu melhor email");
    const emailLabel = screen.getByText("E-mail");
    const buttonElement = screen.getByText("Registrar");

    fireEvent.change(emailField, { target: { value: "teste@teste" } });
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(emailLabel).toHaveTextContent("E-mail - Insira um email válido.");
    });
  });
});
