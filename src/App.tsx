import { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Panels } from "./components/Panels";
import { StateContext } from "./context";
import { NotFoundPage } from "./pages/NotFoundPage";
import { initialState, reducer } from "./store/reducer";
import { routes } from "./configs/routes";
import { Meta } from "./components/Meta";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAnimationEnd, setAnimationEnd] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflowY = "unset";
      setAnimationEnd(true);
    }, 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Meta />
      <Panels />
      {isAnimationEnd && (
        <div className="App">
          <div className="container">
            <BrowserRouter>
              <StateContext.Provider value={{ ...state, dispatch }}>
                <Header />
                <Routes>
                  {routes.map(({ path, Component, id }) => (
                    <Route key={id} path={path} element={<Component />} />
                  ))}
                  <Route element={<NotFoundPage />} />
                </Routes>
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
