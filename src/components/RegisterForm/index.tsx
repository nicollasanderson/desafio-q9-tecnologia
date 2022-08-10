import { FormContainer, FormMain, StyledLabel } from "./style";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import app from "../../services/api";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../providers/token";
import { useEffect } from "react";

const RegisterForm = () => {
  const { setToken, token }: any = UseTokenProvider();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido.")
      .required(" obrigatório"),
  });

  useEffect(() => {
    if (token) {
      return navigate("/list");
    }
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (data: any) => {
    app
      .post("register", data)
      .then((response) => {
        window.localStorage.setItem("@q9pets:token", response.data.user.token);
        toast.success("Registrado com sucesso!");
        setToken(response.data.user.token);
        navigate("/list");
      })
      .catch((err) => toast.error("Algo de errado não está certo 🤔"));
  };

  return (
    <FormContainer>
      <FormMain onSubmit={handleSubmit(handleRegister)}>
        <h1>Cadastro</h1>
        <StyledLabel htmlFor="email" errColor={errors.email ? true : false}>
          E-mail {errors.email && "- " + errors.email.message}
        </StyledLabel>
        <input type="email" {...register("email")} />
        <motion.button>Registrar</motion.button>
      </FormMain>
    </FormContainer>
  );
};

export default RegisterForm;
