import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/tema/listatemas/ListaTemas";


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        {/* distanciamento enrta cada elemento que compoe a pagina */}
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* a página de Cadastro será exibida automaticamente como a página inicial do sistema. */}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro" element={<ListaTemas />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
