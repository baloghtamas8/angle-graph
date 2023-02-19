import { useState } from "react";
import "./App.css";
import "./components/AngularPos";
import AngularPos from "./components/AngularPos";

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const handleRangeA = (e) => {
        setA(e.currentTarget.value);
    };
    const handleRangeB = (e) => {
        setB(e.currentTarget.value);
    };
    const handleRangeC = (e) => {
        setC(e.currentTarget.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <label for="points">Angle 1:</label>
                <input
                    type="range"
                    name="a"
                    min="0"
                    max="360"
                    value={a}
                    onChange={handleRangeA}
                />

                <label for="points">Angle 2:</label>
                <input
                    type="range"
                    name="b"
                    min="0"
                    max="360"
                    value={b}
                    onChange={handleRangeB}
                />

                <label for="points">Angle 3:</label>
                <input
                    type="range"
                    name="c"
                    min="0"
                    max="360"
                    value={c}
                    onChange={handleRangeC}
                />
            </header>
            <main>
                <AngularPos a={a} b={b} c={c} />
            </main>
        </div>
    );
}

export default App;
