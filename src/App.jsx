import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage1 from "./pages/HomePage1/HomePage1";
import { CategoryProvider } from "./components/CategoryContext/CategoryContext";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import FAQ from "./pages/FAQ/FAQ";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage2 from "./pages/HomePage2/HomePage2";

import Loader from "./components/Loader/Loader";
import { useLoading } from "./components/LoadingContext/LoadingContext";

function RouterContainer() {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // loader duration

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="DashBoard" element={<Dashboard />} />
        <Route path="Error" element={<Error />} />
        <Route path="HomePage2" element={<HomePage2 />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <HashRouter>
      <CategoryProvider>
        <RouterContainer />
      </CategoryProvider>
    </HashRouter>
  );
}

export default App;
