import About from "./About";
import AppSection from "./AppSection";
import Customer from "./Customer";
import Footer from "./footer";
import Header from "./Header";
import Land from "./Land";
import Products from "./Products";
import ProductsCategory from "./ProductsCategory";
import UserState from "./UserState";

function Home() {
    return (
        <div
        style={{
            background: "url(src/assets/images/bg-img/06.jpg)",
            height: "100vh",
        }}
        >
        <div style={{ height: "100vh" }}>
            <Header />
            <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}
            >
            <Land />
            </div>
        </div>
        <Products />
        <ProductsCategory />
        <UserState />
        <Customer />
        <About />
        <AppSection />
        <Footer />
        </div>
    );
}

export default Home;
