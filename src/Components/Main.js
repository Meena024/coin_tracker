import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import Auth from "./Pages/Authentication/Auth";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Main;
