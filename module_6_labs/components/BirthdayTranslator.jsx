import { useState } from "react";

const phrases = new Map([
    ["english", "Happy Birthday"],
    ["german", "Alles Gute zum Geburtstag"],
    ["spanish", "Feliz Cumpleaños"],
]);

function BirthdayTranslator() {
    const [currentPhrase, setCurrentPhrase] = useState({
        lang: "english",
        phrase: "Happy Birthday",
    });
    const handleChangeLanguage = (newlang) => {
        setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
    };

    return (
        <div className='BirthdayTranslator componentBox'>
            <button className='my-button' onClick={() => handleChangeLanguage("english")}>
                English
            </button>

            <button className='my-button' onClick={() => handleChangeLanguage("german")}>
                German
            </button>

            <button className='my-button' onClick={() => handleChangeLanguage("spanish")}>
                Spanish
            </button>
            <h3>
                {currentPhrase.phrase}! ({currentPhrase.lang})
            </h3>
        </div>
    );
}

export default BirthdayTranslator;
