import "./App.css";
import Gap from "../components/Gap";
import Greeting from "../components/greeting";
import BigCats from "../components/BigCats";
import Emoji from "../components/Emoji";
import BirthdayTranslator from "../components/BirthdayTranslator";
import LoginForm from "../components/LoginForm";
import TimeOfDay from "../components/TimeOfDay";
import Weather from "../components/Weather";

function App() {
    return (
        <>
            <Greeting name='William'>
                <div>This is my personal greeting message.</div>
            </Greeting>
            <Greeting name='Paige' />
            <Greeting />
            <Gap />
            <BigCats />
            <Gap />
            <Emoji />
            <Gap />
            <TimeOfDay />
            <Gap />
            <BirthdayTranslator />
            <Gap />
            <LoginForm />
            <Gap />
            <Weather />
        </>
    );
}

export default App;
