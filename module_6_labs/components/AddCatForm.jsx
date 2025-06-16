import { useState } from "react";

function AddCatForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [catImage, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !latinName || !catImage) return;
        onSubmit({ name, latinName, catImage });
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
                            value={name}
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
                            value={latinName}
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
