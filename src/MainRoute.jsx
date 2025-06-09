import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
//components
import Transition from "./components/transition.jsx";
// pages
import Home from "./pages/Home.jsx";
import Paralax from "./pages/Paralax.jsx";
import Premo from "./pages/Premo.jsx";

function MainRoute() {
  const location = useLocation();
  return (
    <main className="relative">
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <Transition>
                <Home />
              </Transition>
            }
          />
          <Route
            path="/paralax"
            element={
              <Transition>
                <Paralax />
              </Transition>
            }
          />
          <Route
            path="/premo"
            element={
              <Transition>
                <Premo />
              </Transition>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default MainRoute;
