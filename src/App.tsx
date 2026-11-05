import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import AdmProduto from "./pages/admProduto/AdmProduto";
import DetProduto from "./pages/detProduto/DetProduto";


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<ListaProdutos/>}/>
                <Route path="/detalheproduto" element={<DetProduto/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/AdmProdutos" element={<AdmProduto/>}/>
                <Route path="*" element={<img className="container-notfound" src= "https://www.dragonforceone.com/front-assets/img/error.gif" alt="Nao encontrado" />}/>
            </Routes>
            <Footer />
        </>
    )
}