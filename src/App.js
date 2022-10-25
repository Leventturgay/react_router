import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import Paths from "./pages/Paths";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/personDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRoter from "./pages/PrivateRoter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />

        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="contact" element={<PrivateRoter />}>
          <Route path="" element={<Contact />} />
        </Route>

        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
