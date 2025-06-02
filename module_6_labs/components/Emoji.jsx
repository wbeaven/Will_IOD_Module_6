import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState("😃");
    const [time, setTime] = useState("Dawn");

    const handleTime = () => {
        let newTime;
        if (time === "Dawn") newTime = "Morning";
        else if (time === "Morning") newTime = "Midday";
        else if (time === "Midday") newTime = "Afternoon";
        else if (time === "Afternoon") newTime = "Evening";
        else if (time === "Evening") newTime = "Night";
        else if (time === "Night") newTime = "Midnight";
        else if (time === "Midnight") newTime = "Dawn";
        setTime(newTime);
    };

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

            <button className='my-button' onClick={handleTime}>
                Progress Time
            </button>
            <h1>{time}</h1>
        </>
    );
}

export default Emoji;
