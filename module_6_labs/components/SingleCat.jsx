import { useState } from "react";

function SingleCat({ name, latin, image }) {
    const [showElement, setShowElement] = useState(true);

    return (
        <>
            {showElement ? (
                <li>
                    {name}, {latin}{" "}
                    <img
                        src={image}
                        alt='big cat'
                        width={"40px"}
                        style={{ verticalAlign: "middle" }}
                    />
                    <button className={"delete"} onClick={() => setShowElement(!showElement)}>
                        X
                    </button>
                </li>
            ) : null}
        </>
    );
}

export default SingleCat;
