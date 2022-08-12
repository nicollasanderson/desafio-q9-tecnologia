import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/404";
import List from "../pages/List";
import Register from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/list" element={<List />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
