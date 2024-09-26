import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/shop/Shop";
import Header from "./components/Home/Header";
import ShopProduct from "./components/shop/ShopProduct";
import CartPage from "./components/shop/CartPage";
import Blog from "./components/Blog/Blog";
import Singleblog from "./components/Blog/Singleblog";
import AboutUs from "./components/About/Aboutus";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/notFind/NotFound";
import Footer from "./components/Home/footer";
import Login from "./components/Login/Login";
import CreateAccount from "./components/Register/Register";

export default function App() {
    return (
        <>
        <Home/>
        </>
    );
}
