import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const initialCats = [
    { id: "1", name: "Cheetah", latinName: "Acinonyx jubatus", image: "./Cheetah.png" },
    { id: "2", name: "Cougar", latinName: "Puma concolor", image: "./Cougar.png" },
    { id: "3", name: "Jaguar", latinName: "Panthera onca", image: "./Jaguar.png" },
    { id: "4", name: "Leopard", latinName: "Panthera pardus", image: "./Leopard.png" },
    { id: "5", name: "Lion", latinName: "Panthera leo", image: "./Lion.png" },
    { id: "6", name: "Snow Leopard", latinName: "Panthera uncia", image: "./Snow Leopard.png" },
    { id: "7", name: "Tiger", latinName: "Panthera tigris", image: "./Tiger.png" },
];

function BigCats() {
    const [cats, setCats] = useState(initialCats);
    const [order, setOrder] = useState("original");
    const getVisibleCats = () => {
        console.log(cats);
        if (order === "original") return cats;
        if (order === "reversed") return [...cats].reverse();
        if (order === "filtered")
            return cats.filter((cat) => cat.latinName.toLowerCase().includes("panthera"));
        return cats;
    };
    const handleOrder = () => {
        if (order === "original") setOrder("reversed");
        else if (order === "reversed") setOrder("filtered");
        else setOrder("original");
    };
    const addCat = (newCat) => {
        setCats([...cats, { id: cats.length + 1, ...newCat }]);
    };

    return (
        <>
            <button className='my-button' onClick={handleOrder}>
                Sort
            </button>
            <ul>
                {getVisibleCats().map((cat) => (
                    <SingleCat
                        key={cat.id}
                        name={cat.name}
                        latin={cat.latinName}
                        image={cat.image}
                    />
                ))}
            </ul>
            <AddCatForm onSubmit={addCat} />
        </>
    );
}

export default BigCats;
