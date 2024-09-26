import propTypes from "prop-types";
const Clints = ({ bodyColor, borderColor, left, top }) => {
    return (
        <div className="clint">
        <div
            className="left"
            style={{ background: `${bodyColor}`, left: `${left}`, top: `${top}` }}
        >
            <span
            className="span"
            style={{
                position: "absolute",
                width: "34px",
                height: "34px",
                top: "-6px",
                left: "-6px",
                border: `4px solid ${borderColor}`,
                borderRadius: "50%",
            }}
            ></span>
        </div>
        </div>
    );
    };

    export default Clints;
    Clints.propTypes = {
    bodyColor: propTypes.string,
    borderColor: propTypes.string,
    left: propTypes.string,
    top: propTypes.string,
    };
