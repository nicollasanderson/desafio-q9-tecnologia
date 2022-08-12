import { useState } from "react";
import ImageModal from "../ImageModal";
import { StyledCard } from "./styled";

interface CardProps {
  image: string;
  breed: string;
}

const DogCard = ({ image, breed }: CardProps) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };

  return (
    <>
      {modal && <ImageModal image={image} setModal={setModal} breed={breed} />}
      <StyledCard whileHover={{ scale: 1.1 }} onClick={handleClick}>
        <figure>
          <img src={image} alt={`Um ${breed} muito fofinho :D`} />
          <figcaption>A imagem de um {breed}</figcaption>
        </figure>
      </StyledCard>
    </>
  );
};

export default DogCard;
