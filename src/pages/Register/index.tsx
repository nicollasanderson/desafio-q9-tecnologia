import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { StyledSection } from "./style";

const Register = () => {
  return (
    <>
      <Header />
      <StyledSection>
        <figure>
          <img
            src="https://i.imgur.com/zNBuH9q.png"
            alt="Uma moça bonita com um doguinho"
          />
          <figcaption>Uma moça bonita com um doguinho</figcaption>
        </figure>
        <RegisterForm />
      </StyledSection>
    </>
  );
};

export default Register;
