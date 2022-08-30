import { Produtos } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="*" element={<Navigate to={"/produtos"} replace={true} />} />
    </Routes>
  );
};
