import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "./Select";
import "./Home.css";
import products from "/src/products.json";
import { useState } from "react";

const Land = () => {
    const [filteringData, setFilteringData] = useState([]);

    const handleChange = (e) => {
        const filteringData = products.filter((product) => {
        // console.log(product.name);
        const dataSet = product.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        return dataSet;
        });
        setFilteringData(filteringData);
    };
    const dataArr = Array.from(filteringData);
    const div = dataArr.map((item, index) => {
        if (dataArr.length === 76) {
        return <></>;
        } else {
        return (
            <li className="li" key={index}>
            {item.name}
            </li>
        );
        }
    });

    return (
        <div className="form">
        <h2 className="text-black-50 text-center">
            Search For One From <span style={{ color: "#FFB300" }}>Thousand</span>{" "}
            Of Products
        </h2>
        <form
            className="bg-white d-flex flex-row justify-content-between align-items-center p-3 rounded-pill border-top-0"
            style={{ border: "3px solid rgb(233 233 233 / 76%)", margin: "20px 0" }}
        >
            <Select></Select>
            <input
            type="text"
            placeholder="Search Your Product"
            className="border border-0 px-2"
            style={{ flex: "1", outline: "none" }}
            onChange={handleChange}
            />
            <FontAwesomeIcon
            icon={faSearch}
            className="text-black-50"
            style={{ cursor: "pointer" }}
            />
        </form>
        <h6 className="text-center mt-3" style={{ color: "#616161" }}>
            We have the largest collection of products{" "}
        </h6>

        <div className="ul-container">
            <ul className="ul">{div}</ul>
        </div>
        </div>
    );
};

export default Land;
