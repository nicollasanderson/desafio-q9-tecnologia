import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DogCard from "../../components/DogCard";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { UseTokenProvider } from "../../providers/token";
import app from "../../services/api";
import {
  BreedButton,
  StyledDogList,
  StyledSearchBar,
  StyledSection,
} from "./style";

const List = () => {
  const { token }: any = UseTokenProvider();
  const [list, setList] = useState([]);
  const [breed, setBreed] = useState("chihuahua");
  const [loading, setLoading] = useState(true);
  const breeds = ["chihuahua", "husky", "pug", "labrador"];

  const navigate = useNavigate();

  const getList = (newBreed: string) => {
    app
      .get(`/list?breed=${newBreed}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setBreed(response.data.breed);
        setList(response.data.list.sort(() => 0.5 - Math.random()));
      })
      .catch((err) => {
        toast.error("Algo deu errado :'(");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!token) {
      return navigate("/register");
    }
    getList(breed);
  }, []);

  const handleBreed = (newBreed: string) => {
    setLoading(true);
    getList(newBreed);
  };

  return (
    <>
      <Header />
      <StyledSection>
        <StyledSearchBar>
          {breeds.map((breed, i) => (
            <BreedButton
              initial={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleBreed(breed)}
              key={i}
            >
              {breed.replace(/^\w/, (c) => c.toUpperCase())}
            </BreedButton>
          ))}
        </StyledSearchBar>
        <StyledDogList>
          {!loading ? (
            list.map((image, i) => (
              <DogCard key={i} image={image} breed={breed} />
            ))
          ) : (
            <Loader />
          )}
        </StyledDogList>
      </StyledSection>
    </>
  );
};

export default List;
