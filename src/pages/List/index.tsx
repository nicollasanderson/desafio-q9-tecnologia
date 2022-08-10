import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { UseTokenProvider } from "../../providers/token";
import app from "../../services/api";
import { StyledSearchBar, StyledSection } from "./style";

const List = () => {
  const { token }: any = UseTokenProvider();
  const [response, setResponse] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/register");
    }

    app
      .get("/list", { headers: { Authorization: token } })
      .then((response) => {
        setResponse(response.data);
        console.log("deu bom");
      })
      .catch();
  }, []);

  return (
    <>
      <Header />
      <StyledSection>
        <StyledSearchBar></StyledSearchBar>
      </StyledSection>
    </>
  );
};

export default List;
