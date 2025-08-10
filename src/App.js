import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import WebFont from "webfontloader";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Courier New", "Lato"], // You can customize these
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
