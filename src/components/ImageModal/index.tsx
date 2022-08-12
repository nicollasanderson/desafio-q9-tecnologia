import { ModalImage, ModalSection } from "./style";

interface IMageModal {
  setModal: any;
  image: string;
  breed: string;
}

const ImageModal = ({ setModal, image, breed }: IMageModal) => {
  const handleModal = () => {
    setModal(false);
  };

  return (
    <ModalSection onClick={handleModal}>
      <figure>
        <ModalImage
          src={image}
          initial={{ opacity: 0, y: -200 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
          }}
          animate={{ opacity: 1, y: 0 }}
          alt={`Um ${breed} muito fofinho :D`}
        />
        <figcaption>Um doguinho lindo</figcaption>
      </figure>
    </ModalSection>
  );
};

export default ImageModal;
