import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { clientCurrent } from "./JS/clientSlice/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import Profil from "./components/Profil";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Accessoire from "./components/Accessoire";
import About from "./components/About";
import Vetement from "./components/Vetement";
import { accessoireGet } from "./JS/accessoireSlice";
import { vetementGet } from "./JS/vetementSlice";
import Description from "./components/Description";
import Pannier from "./components/Pannier";
import Accdescr from "./components/Accdescr";
import Footer from "./components/Footer";
import { commandeGet } from "./JS/commandeSlice";
import Dashbord from "./components/admin/Dashbord";

function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();

  console.log(isAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(clientCurrent());
    }
    dispatch(accessoireGet());

    dispatch(vetementGet());
    dispatch(commandeGet());
  }, [ping]);

  return (
    <div>
      <div>
        <Navigation ping={ping} setPing={setping} />
      </div>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessoire" element={<Accessoire />} />
        <Route path="/vetement" element={<Vetement />} />
        <Route
          path="/dashbord"
          element={<Dashbord ping={ping} setping={setping} />}
        />
        <Route
          path="/description/:id"
          element={<Description ping={ping} setping={setping} />}
        />
        <Route
          path="/accdescr/:id"
          element={<Accdescr ping={ping} setping={setping} />}
        />

        <Route
          path="/pannier"
          element={<Pannier ping={ping} setping={setping} />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
