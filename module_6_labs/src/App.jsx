import "./App.css";
import Greeting from "../components/greeting";
import BigCats from "../components/BigCats";
import Emoji from "../components/Emoji";
import BirthdayTranslator from "../components/BirthdayTranslator";

function App() {
    return (
        <>
            <Greeting name='William'>
                <div>This is my personal greeting message.</div>
            </Greeting>
            <Greeting name='Paige' />
            <Greeting />
            <BigCats />
            <Emoji />
            <BirthdayTranslator />
        </>
    );
}

export default App;
