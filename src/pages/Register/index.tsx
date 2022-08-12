import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { StyledSection } from "./style";

const Register = () => {
  return (
    <>
      <Header />
      <StyledSection>
        <RegisterForm />
      </StyledSection>
    </>
  );
};

export default Register;
