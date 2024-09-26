const DevloperInfo = () => {
    return (
        <div style={{ padding: "25px 0" }}>
        <div className="container">
            <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-12">
                <div
                className="left fw-medium"
                style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    alignItems: "center",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontSize: "14px",
                }}
                >
                <h6 className="text-black-50 m-0 me-sm-3 me-1">@2024 </h6>{" "}
                <span className="text-black me-sm-3 me-1">Shop Cart </span>{" "}
                <h6 className="text-black-50 m-0 me-sm-3 me-1">Designed By </h6>{" "}
                <span className="text-black">Mohamed Ali</span>
                </div>
            </div>
            <div className="col-md-6 col-12">
                <ul
                className="list-unstyled fw-medium d-flex flex-row gap-4 text-black-50 m-0 justify-content-sm-end justify-content-start"
                style={{ cursor: "pointer", fontSize: "14px" }}
                >
                <li>Faculty</li>
                <li>Staff</li>
                <li>Students</li>
                <li>Alumni</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
    };

export default DevloperInfo;
