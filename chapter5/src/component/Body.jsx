import { useState } from "react";

function Body() {
    console.log("Update!");

    const [count, setCount] = useState(1);
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    const onIncrease = () => {
        setCount(count + 1);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        console.log("변경된 값: ", e.target.value);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <div><input onChange={handleTextChange} /></div>
            <div><input type="date" value={date} onChange={handleDateChange} /></div>
        </div>
    );
}

export default Body;