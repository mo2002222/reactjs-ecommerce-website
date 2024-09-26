import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";

const Description = ({ text }) => {
  return (
    <div className="d-flex gap-3 align-items-center">
      <FontAwesomeIcon icon={faStar} color="#e57373" />
      <p className="fw-medium text-black-50 mb-0">{text}</p>
    </div>
  );
};

export default Description;

Description.propTypes = {
  text: propTypes.string,
};
