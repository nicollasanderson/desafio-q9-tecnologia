import { Route, Routes } from "react-router-dom";
import List from "../pages/List";
import Register from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default Router;
