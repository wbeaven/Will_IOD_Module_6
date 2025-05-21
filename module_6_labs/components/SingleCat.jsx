function SingleCat({ name, latin, image }) {
    return (
        <>
            <li>
                {name}, {latin} <img src={image} alt='big cat' width={"40px"} />
            </li>
        </>
    );
}

export default SingleCat;
