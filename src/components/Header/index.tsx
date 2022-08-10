import { HeaderMain } from "./style";
import { MdPets } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UseTokenProvider } from "../../providers/token";

const Header = () => {
  const { setToken, token }: any = UseTokenProvider();

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    setToken(false);
    navigate("/register");
  };

  return (
    <HeaderMain>
      <div>
        <div>
          <MdPets />
          <h1>Q9 Pets</h1>
        </div>
        <nav>
          <Link to="/register">Registrar</Link>
          <Link to="/list">Lista</Link>
          {token && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </div>
    </HeaderMain>
  );
};

export default Header;
