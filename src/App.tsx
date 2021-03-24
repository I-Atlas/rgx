import { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Panels } from "./components/Panels";
import { StateContext } from "./context";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { initialState, reducer } from "./store/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAnimationEnd, setAnimationEnd] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflowY = "unset";
      setAnimationEnd(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Panels />
      {isAnimationEnd && (
        <div className="App">
          <div className="container">
            <BrowserRouter>
              <StateContext.Provider value={{ ...state, dispatch }}>
                <Header />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/tags/:name" component={HomePage} />
                  <Route component={NotFoundPage} />
                </Switch>
                <Footer />
              </StateContext.Provider>
            </BrowserRouter>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
