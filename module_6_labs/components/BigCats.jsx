import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const cats = [
    { id: "1", name: "Cheetah", latinName: "Acinonyx jubatus" },
    { id: "2", name: "Cougar", latinName: "Puma concolor" },
    { id: "3", name: "Jaguar", latinName: "Panthera onca" },
    { id: "4", name: "Leopard", latinName: "Panthera pardus" },
    { id: "5", name: "Lion", latinName: "Panthera leo" },
    { id: "6", name: "Snow leopard", latinName: "Panthera uncia" },
    { id: "7", name: "Tiger", latinName: "Panthera tigris" },
];

function mapArray(arr) {
    return arr.map((cat) => (
        <SingleCat
            key={cat.id}
            name={cat.name}
            latin={cat.latinName}
            image={`./cat${cat.id}.png`}
        />
    ));
}

const originalOrder = mapArray(cats);

const reverseOrder = mapArray([...cats].reverse());

const filterOrder = mapArray(
    [...cats].filter((cat) => cat.latinName.toLocaleLowerCase().includes("panthera"))
);

function BigCats() {
    const [order, setOrder] = useState(originalOrder);
    const handleOrder = () => {
        let newOrder;
        if (order === originalOrder) newOrder = reverseOrder;
        else if (order === reverseOrder) newOrder = filterOrder;
        else if (order === filterOrder) newOrder = originalOrder;
        setOrder(newOrder);
    };

    return (
        <>
            <button className='my-button' onClick={handleOrder}>
                Sort
            </button>
            <ul>{order}</ul>
            <AddCatForm />
        </>
    );
}

export default BigCats;
