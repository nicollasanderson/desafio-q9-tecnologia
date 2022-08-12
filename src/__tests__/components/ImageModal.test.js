import { render, screen } from "@testing-library/react";
import ImageModal from "../../components/ImageModal";

describe("Header Component", () => {
  test("should be able to render Header", () => {
    render(
      <ImageModal
        setModal={() => {}}
        image="https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg"
        breed="husky"
      />
    );
    const image = screen.getByAltText("Um husky muito fofinho :D");

    expect(image).toBeInTheDocument();
  });
});
