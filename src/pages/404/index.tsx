import Header from "../../components/Header";
import { DivText, SectionMain } from "./style";

const Page404 = () => {
  return (
    <>
      <Header />
      <SectionMain>
        <DivText>
          <figure>
            <img
              src="https://i.imgur.com/KU4CNgy.png"
              alt="404 not found cat"
            />
            <figcaption>
              Figura de um gato escondido em baixo de alguns papeis com o rabo
              de fora
            </figcaption>
          </figure>
          <h1>404</h1>
          <p>Página não encontrada!</p>
        </DivText>
      </SectionMain>
    </>
  );
};

export default Page404;
