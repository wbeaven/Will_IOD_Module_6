import { useState } from "react";
import "./App.css";
import Greeting from "../components/greeting";
import BigCats from "../components/BigCats";

function App() {
    return (
        <>
            <Greeting name='William'>
                <div>This is my personal greeting message.</div>
            </Greeting>
            <Greeting name='Paige' />
            <Greeting />
            <BigCats />
        </>
    );
}

export default App;
