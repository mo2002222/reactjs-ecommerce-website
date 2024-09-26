import propTypes from "prop-types";

const Posts = ({ imgsrc }) => {
    return (
        <div className="posts d-flex flex-column gap-3 mb-2">
        <div
            className="post d-flex gap-4 mb-2"
            style={{ boxShadow: "rgb(197 190 190 / 52%) 0px 0px 2px 0px" }}
        >
            <img
            src={imgsrc}
            alt=""
            style={{ maxWidth: "85px", maxHeight: "77px" }}
            />
            <div className="caption d-flex flex-column">
            <p className="fw-medium mb-0" style={{ color: "#424242" }}>
                Poor People Compaign Our Resources
            </p>
            <p className="text-black-50 mb-2">jun 25,2024</p>
            </div>
        </div>
        </div>
    );
};
export default Posts;

Posts.propTypes = {
  imgsrc: propTypes.string,
};
