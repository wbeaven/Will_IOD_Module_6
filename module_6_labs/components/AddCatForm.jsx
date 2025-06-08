import { useState } from "react";

function AddCatForm({ onSubmit }) {
    const [catName, setName] = useState("");
    const [catLatinName, setLatinName] = useState("");
    const [catImage, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!catName || !catLatinName || !catImage) return;
        onSubmit({ catName, catLatinName, catImage });
        setName("");
        setLatinName("");
    };

    return (
        <div>
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
                    <button className='my-button' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCatForm;
