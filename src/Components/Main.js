import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Auth from "./Pages/Authentication/Auth";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Main;
