import { ModalImage, ModalSection } from "./style";

const ImageModal = ({ setModal, image }: any) => {
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
        />
        <figcaption>Um doguinho lindo</figcaption>
      </figure>
    </ModalSection>
  );
};

export default ImageModal;
