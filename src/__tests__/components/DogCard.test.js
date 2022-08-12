import { render, screen } from "@testing-library/react";
import DogCard from "../../components/DogCard";

describe("DogCard Component", () => {
  test("should be able to render DogCard chihuahua", () => {
    render(
      <DogCard
        image="https://images.dog.ceo/breeds/chihuahua/n02085620_1346.jpg"
        breed="chihuahua"
      />
    );
    expect(screen.getByAltText("Um chihuahua muito fofinho :D")).toBeTruthy();
  });

  test("should be able to render DogCard pug", () => {
    render(
      <DogCard
        image="https://images.dog.ceo/breeds/pug/n02110958_340.jpg"
        breed="pug"
      />
    );
    expect(screen.getByAltText("Um pug muito fofinho :D")).toBeTruthy();
  });

  test("should be able to render figcaption", () => {
    render(
      <DogCard
        image="https://images.dog.ceo/breeds/pug/n02110958_340.jpg"
        breed="pug"
      />
    );
    expect(screen.getByText("A imagem de um pug")).toBeTruthy();
  });
});
