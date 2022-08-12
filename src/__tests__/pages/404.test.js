import { render, screen } from "@testing-library/react";
import Page404 from "../../pages/404";

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useNavigate: () => mockHistory,
}));

describe("404 Page", () => {
  test("should be able to render 404 page", () => {
    render(<Page404 />);

    const img = screen.getByAltText("404 not found cat");
    const msg404 = screen.getByText("404");
    const text404 = screen.getByText("Página não encontrada!");

    expect(img).toBeInTheDocument();
    expect(msg404).toBeInTheDocument();
    expect(text404).toBeInTheDocument();
  });
});
