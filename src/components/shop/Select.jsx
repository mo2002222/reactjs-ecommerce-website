import SelectValue from "./SelectValue";
import propTypes from "prop-types";
const Select = ({ clinetCountry }) => {
    if (clinetCountry === "USA") {
        return (
        <SelectValue
            st={"Los Angeles (LA)"}
            nd={"New York (NY)"}
            rd={"Washington"}
            th={"Valdivia"}
            fth={"Atlanta"}
            sth={"California"}
        />
        );
    } else if (clinetCountry === "Uk") {
        return (
        <SelectValue
            st={"London"}
            nd={"Manchester"}
            rd={"Birmingham"}
            th={"West Hame"}
        />
        );
    } else if (clinetCountry === "KSA") {
        return <SelectValue st={"Jeddah"} nd={"Mecca"} rd={"Rihadh"} th={"Taif"} />;
    } else if (clinetCountry === "Eg") {
        return (
        <SelectValue st={"Cairo"} nd={"Alexandria"} rd={"Gizza"} th={"Qenna"} />
        );
    } else if (clinetCountry === "UEA") {
        return (
        <SelectValue st={"Abu Dhabi"} nd={"Dubai"} rd={"Alman"} th={"Alain"} />
        );
    }
    };

    export default Select;
    Select.propTypes = {
    clinetCountry: propTypes.string,
    };
