function SingleCat({ name, latin, foo }) {
    return (
        <>
            <li>
                {name}, {latin} <img src={foo} alt='big cat' width={"40px"} />
            </li>
        </>
    );
}

export default SingleCat;
