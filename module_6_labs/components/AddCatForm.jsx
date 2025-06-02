import { useState } from "react";

function AddCatForm() {
    const [catName, setName] = useState("");
    const [catLatinName, setLatinName] = useState("");
    const [catImage, setImage] = useState();

    const [submitResult, setSubmitResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (catName !== "" && catLatinName !== "" && catImage !== undefined) {
            setSubmitResult("Added New Cat");
        }
    };

    return (
        <div className='componentBox'>
            <form onSubmit={handleSubmit}>
                <div className='formRow'>
                    <label>
                        Name:
                        <input
                            type='text'
                            value={catName}
                            name='catName'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formRow'>
                    <label>
                        Latin Name:
                        <input
                            type='text'
                            value={catLatinName}
                            name='catLatinName'
                            onChange={(e) => setLatinName(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formRow'>
                    <label>
                        Cat Image:
                        <input
                            type='file'
                            value={catImage}
                            name='catImage'
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formRow'>
                    <button className='my-button'>Submit</button>
                    <p>{submitResult}</p>
                </div>
            </form>
        </div>
    );
}

export default AddCatForm;
