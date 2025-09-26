import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./Components/ReduxStore/store";
import AuthInitializer from "./Components/AuthInitializer";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Roboto",
          "Lato",
          "Open Sans",
          "Montserrat",
          "Poppins",
          "Merriweather",
          "Source Sans Pro",
          "Nunito",
          "Playfair Display",
          "Roboto Slab",
        ],
      },
    });
  }, []);

  return (
    <Provider store={store}>
      <AuthInitializer />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
