import { useLocation } from "react-router-dom";
import Background from "../shop/Background";
import PopTags from "../shop/PopTags";
import Popular from "../shop/Popular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Singlblog = () => {
    const location = useLocation();
    const state = location.state;

    return (
        <div>
        <Background title={"single blog pag"} desc={"Blog / Single Blog"} />
        <div className="container">
            <div className="row" style={{ marginTop: "100px" }}>
            <div className="right-section col-lg-8 col-12">
                <img src={state.path} className="w-100 mb-4" alt="" />
                <p className="fw-meduim ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi quis
                quod eius consectetur officia repudiandae dolorem veniam inventore
                tempora odio nobis neque animi error ea! Porro delectus Facilis,
                ullam? Sed omnis consectetur adipisicing elit Velit provident quam
                ad earum reprehenderit consectetur Lorem ipsum dolor sit amet
                consectetur adipisicing elit Non maiores nam magni tenetur
                doloremque labore fuga eos eaque repellendus ipsum Lorem ipsum
                dolor sit amet consectetur, adipisicing elit Repudiandae maiores
                quisquam aspernatur enim quam rerum amet perferendis molestiae non
                accusantium, repellendus impedit possimus recusandae atque tenetur
                dignissimos libero dolore optio expedita quia nisi quo dolores
                tempore. Velit, maxime temporibus aspernatur facere error omnis
                suscipit adipisci perspiciatis obcaecati quis assumenda id totam
                provident nulla praesentium doloribus rem dicta numquam
                laboriosam.
                </p>
                <div
                className="content w-100 d-flex gap-2 p-4 pb-2 mb-4"
                style={{ background: "rgb(239, 108, 0)" }}
                >
                <FontAwesomeIcon icon={faQuoteLeft} color="#fff" size="2x" />
                <p className="fw-meduim text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    esse debitis maiores Fugit ea quae perspiciatis fugiat doloribus
                    Consequuntur ullam explicabo laudantium suscipit Lorem ipsum
                    dolor sit amet consectetur adipisicing eli Necessitatibus
                    laudantium reprehenderit similique nulla vero quisquam,
                    blanditiis sed sint nobis voluptates deleniti modi consequatur
                    libero Dolorem cum vel enim nobis minus dolorum quam rerum dicta
                    et ipsam nisi.
                </p>
                </div>
                <p className="fw-meduim ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi quis
                quod eius consectetur officia repudiandae dolorem veniam inventore
                tempora odio nobis neque animi error ea! Porro delectus Facilis,
                ullam? Sed omnis consectetur adipisicing elit Velit provident quam
                ad earum reprehenderit consectetur Lorem ipsum dolor sit amet
                consectetur adipisicing elit Non maiores nam magni tenetur
                doloremque labore fuga eos eaque repellendus ipsum Lorem ipsum
                dolor sit amet consectetur, adipisicing elit Repudiandae maiores
                quisquam aspernatur enim quam rerum amet perferendis molestiae non
                accusantium, repellendus impedit possimus recusandae atque tenetur
                dignissimos libero dolore optio expedita quia nisi quo dolores
                tempore. Velit, maxime temporibus aspernatur facere error omnis
                suscipit adipisci perspiciatis obcaecati quis assumenda id totam
                provident nulla praesentium doloribus rem dicta numquam
                laboriosam.
                </p>
            </div>
            <div className="left-section col-lg-4 col-12">
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

export default Singlblog;
