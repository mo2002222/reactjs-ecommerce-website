import propTypes from "prop-types";
import "../shop/shop.css";

const SelectValue = ({ st, nd, rd, th, fth, sth }) => {
    return (
        <select
        className="text-black-50 border w-100 px-1 py-2 select-country"
        style={{
            outline: "none",
            position: "relative",
            zIndex: "2",
            background: "transparent",
            transition: ".6s",
        }}
        >
        <option value="" disabled selected hidden>
            Country / State
        </option>
        <option value="">{st}</option>
        <option value="">{nd}</option>
        <option value="">{rd}</option>
        <option value="">{th}</option>
        <option value="">{fth}</option>
        <option value="">{sth}</option>
        </select>
    );
    };

    export default SelectValue;
    SelectValue.propTypes = {
    st: propTypes.string,
    nd: propTypes.string,
    rd: propTypes.string,
    th: propTypes.string,
    fth: propTypes.string,
    sth: propTypes.string,
    };
