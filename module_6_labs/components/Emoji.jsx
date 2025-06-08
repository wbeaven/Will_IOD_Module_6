import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState("😃");

    return (
        <>
            <button className='my-button' onClick={() => setMood("😔")}>
                Stub Toe
            </button>
            <button className='my-button' onClick={() => setMood("😃")}>
                Eat Cake
            </button>
            <button className='my-button' onClick={() => setMood("😴")}>
                Sleep
            </button>
            <h1>{mood}</h1>
        </>
    );
}

export default Emoji;
