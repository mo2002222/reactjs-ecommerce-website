import Background from "./Background";
import Popular from "./Popular";
import PopTags from "./PopTags";
import "./shop.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

const ShopProduct = () => {
    const location = useLocation();
    const { path, productName, price, seller } = location.state || {};
    const [showState, setShowState] = useState("description");
    const [productState, setProductState] = useState({
        product: { productName },
        price: { price },
        color: "",
        size: "",
        count: 1,
        dicountCode: " ",
        imgPath: path,
    });
    const handleIncreasClick = () => {
        setProductState({ ...productState, count: productState.count + 1 });
    };
    const handleDecreasClick = () => {
        if (productState.count === 0) {
        setProductState({ ...productState, count: 0 });
        } else {
        setProductState({ ...productState, count: productState.count - 1 });
        }
    };

    const handleSizeChange = (e) => {
        setProductState({ ...productState, size: e.target.value });
    };
    const handleColorChange = (e) => {
        setProductState({ ...productState, color: e.target.value });
    };

    const handleAddToCart = () => {
        const storedData = localStorage.getItem("cart");
        const dataArray = storedData ? JSON.parse(storedData) : [];
        dataArray.push(productState);
        localStorage.setItem("cart", JSON.stringify(dataArray));
    };

    const desc = () => {
        if (showState === "description") {
        return (
            <>
            <p className="fw-medium text-black-50 mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit Veniam
                rerum tempora numquam alias velit repellat nemo quisquam doloribus
                accusamus placeat aspernatur fugiat id Tenetur tempore corporis
                placeat pariatur magni nemo commodi ipsum fugit laboriosam aperiam
                hic sequi! Iusto, autem modi quo laborum incidunt omnis dicta
                tenetur quam, quae pariatur voluptatem ex distinctio voluptate odio
                neque molestiae debitis velit.
            </p>
            <div className="row mb-5">
                <div className="col-lg-8 col-12">
                <div className="d-flex flex-column gap-3">
                    <Description
                    text={"ipsum dolor sit amet consectetur adipisicing elit Rem"}
                    />
                    <Description
                    text={" autem modi quo laborum incidunt omnis dicta tenetur "}
                    />
                    <Description
                    text={
                        " omnis dicta tenetur quam, quae pariatur neque molestiae debitis velit."
                    }
                    />
                    <Description
                    text={"dolor sit amet consectetur adipisicing elit Veniam"}
                    />
                    <Description
                    text={" fugit laboriosam aperiam hic sequi! Iusto, laborum"}
                    />
                    <Description
                    text={
                        "doloribus accusamus placeat aspernatur fugiat id Tenetur"
                    }
                    />
                    <Description
                    text={
                        "fugit laboriosam aperiam hic sequi! Iusto, autem modi quo laborum incidunt omnis"
                    }
                    />
                </div>
                </div>

                <div className="col-lg-4 col-12">
                <img
                    src="/src/assets/images/shop/01.jpg"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>

            <p className="fw-medium text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque
                tenetur aspernatur facilis rerum quis nesciunt inventore saepe quia
                dicta eveniet, soluta quisquam possimus a ducimus illo explicabo?
                Odit voluptatem tempora aliquam aperiam repudiandae earum officiis
                provident! Doloribus totam aspernatur explicabo quod laudantium
                illum quia Iusto quibusdam maxime.
            </p>
            </>
        );
        } else {
        return (
            <div
            className="px-3 pb-5 pt-1"
            style={{ boxShadow: "rgba(206, 206, 206, 0.25) 0px 0px 7px 0px" }}
            >
            <div className="top-section d-flex flex-column gap-4 mt-5 mb-3">
                <Reviews name={"Ganelon Boileau"} imgNum={1} />
                <Reviews name={"Morgana Cailot"} imgNum={2} />
                <Reviews name={"Telford Bois"} imgNum={3} />
                <Reviews name={"Client thumb"} imgNum={4} />
                <hr />
            </div>
            <div className="bottom-section">
                <h6 className="add-review fw-bold text-start mb-4 position-relative">
                Add Review
                </h6>

                <div className="inputs d-flex ">
                <div className="row align-items-center mb-4">
                    <div className="col-lg-4 col-md-6 col-12">
                    <input
                        type="text"
                        placeholder="Full Name*"
                        className="py-2 ps-lg-2 pe-lg-2 px-2 border"
                        style={{ outline: "none" }}
                    />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-md-0 mt-2">
                    <input
                        type="email"
                        placeholder="Your Email*"
                        className="py-2 ps-lg-2 pe-lg-2 px-2 border"
                        style={{ outline: "none" }}
                    />
                    </div>
                    <div className="rating d-flex col-lg-4 col-md-6 col-12 mt-lg-0 mt-3">
                    <p className="fw-medium">Your Rating : </p>
                    <div className="stars">
                        <FontAwesomeIcon
                        icon={faStar}
                        color="#FFC107"
                        style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                        icon={faStar}
                        color="#FFC107"
                        style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                        icon={faStar}
                        color="#FFC107"
                        style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                        icon={faStar}
                        color="#FFC107"
                        style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                        icon={faStar}
                        color="#FFC107"
                        style={{ fontSize: "14px" }}
                        />
                    </div>
                    </div>
                </div>
                </div>
                <textarea
                name="message"
                id="message"
                placeholder="Type Message Here"
                className="border w-100 p-2 mb-2"
                style={{ height: "200px", outline: "none" }}
                ></textarea>
                <button
                style={{
                    padding: "8px 22px",
                    background: "#EF6C00",
                    border: "none",
                    borderRadius: "3px",
                    color: "white",
                }}
                >
                Submit Review
                </button>
            </div>
            </div>
        );
        }
    };

    return (
        <div>
        <Background title={"Product Page"} desc={"Home / Shop / Product"} />
        <div className="container">
            <div className="row" style={{ marginTop: "100px" }}>
            <div className="right-section col-lg-8 col-12">
                <section className="d-flex flex-column gap-5">
                <div
                    className="row py-3 px-1"
                    style={{ boxShadow: "rgb(206 206 206 / 50%) 0px 0px 7px 0px" }}
                >
                    <div className="col-lg-6 col-12 position-relative d-flex align-items-center">
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="position-absolute"
                        style={{
                        padding: "23px 6px",
                        background: "#EF6C00",
                        color: "#fff",
                        fontSize: "14px",
                        cursor: "pointer",
                        }}
                    />
                    <img
                        src={path}
                        alt=""
                        className="img-fluid align-self-start"
                    />
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="position-absolute "
                        style={{
                        right: "12px",
                        padding: "23px 6px",
                        background: "#EF6C00",
                        color: "#fff",
                        fontSize: "14px",
                        cursor: "pointer",
                        }}
                    />
                    </div>
                    <div className="col-lg-6 col-12">
                    <article className="top d-flex flex-column">
                        <h4 className="fw-bold mb-1">{productName}</h4>
                        <div className="stars d-flex align-items-center mb-2">
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#FFC107"
                            style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#FFC107"
                            style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#FFC107"
                            style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#FFC107"
                            style={{ fontSize: "14px" }}
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            color="#FFC107"
                            style={{ fontSize: "14px" }}
                        />
                        <h6 className="text-medium text-black-50 ">(3 review)</h6>
                        </div>
                        <h5 className="fw-bold mb-1 "> {price}$</h5>
                        <p className="fw-bold mb-2">{seller}</p>
                        <p className="fw-medium text-black-50 mb-4">
                        Energistia an deliver atactica metrcs after avsionary
                        Apropria trnsition enterpris an sources applications
                        emerging psd template
                        </p>
                        <div className="content d-flex flex-wrap gap-3 flex-column">
                        <div
                            className="select d-flex gap-3 mb-2"
                            style={{ borderColor: "#555" }}
                        >
                            <select
                            className="border px-3  text-black-50"
                            onChange={handleSizeChange}
                            >
                            <option value="Select Size">Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            </select>
                            <select
                            className="border px-3 py-1 text-black-50"
                            onChange={handleColorChange}
                            >
                            <option value="Select Color">Select Color</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                            <option value="Pink">Pink</option>
                            <option value="Black">Black</option>
                            <option value="gray">Gray</option>
                            </select>
                        </div>
                        <div className="increasment-inputs d-flex gap-xl-3 gap-lg-1 gap-3 mb-4">
                            <div className="buttons d-flex gap-2 align-items-center">
                            <button
                                className="border fw-bold px-3 py-1 bg-white"
                                style={{ borderRadius: "3px", borderColor: "#555" }}
                                onClick={handleIncreasClick}
                            >
                                +
                            </button>
                            <span>{productState.count}</span>
                            <button
                                className="border fw-bold px-3 py-1 bg-white"
                                style={{ borderRadius: "3px", borderColor: "#555" }}
                                onClick={handleDecreasClick}
                            >
                                -
                            </button>
                            </div>
                            <input
                            type="text"
                            placeholder="Enter Discount Code"
                            className="border ms-xl-3 px-1"
                            style={{ outline: "none" }}
                            onChange={(e) => {
                                setProductState({
                                ...productState,
                                dicountCode: e.target.value,
                                });
                            }}
                            />
                        </div>
                        <div className="add-to-cart d-flex justify-content-around align-items-center">
                            <button
                            style={{
                                padding: "8px 20px",
                                background: "#EF6C00",
                                border: "none",
                                borderRadius: "3px",
                                color: "white",
                            }}
                            onClick={handleAddToCart}
                            >
                            Add To Cart
                            </button>
                            <Link to={"/Cart"}>
                            <button
                                style={{
                                padding: "8px 20px",
                                background: "#1565C0",
                                border: "none",
                                borderRadius: "3px",
                                color: "white",
                                }}
                            >
                                Check Out
                            </button>
                            </Link>
                        </div>
                        </div>
                    </article>
                    </div>
                </div>
                <article className="bottom">
                    <div className="buttons d-flex gap-3 mb-3 justify-content-md-start justify-content-center">
                    <button
                        onClick={() => {
                        setShowState("description");
                        }}
                        className={`${
                        showState === "description" ? "active" : "noactive"
                        } border-0 p-2 text-white`}
                        style={{ borderRadius: "3px" }}
                    >
                        Descriptions
                    </button>
                    <button
                        onClick={() => {
                        setShowState("review");
                        }}
                        className={`${
                        showState === "review" ? "active" : "noactive"
                        } border-0 py-2 text-white px-3`}
                        style={{ borderRadius: "3px" }}
                    >
                        Reviews 4
                    </button>
                    </div>
                    {desc()}
                </article>
                </section>
            </div>
            <div className=" left-section col-lg-4 col-12">
                <div className="popular d-flex flex-column mb-3 mt-lg-0 mt-3">
                <Popular />
                </div>
                <div className="pop-tages">
                <PopTags />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ShopProduct;
