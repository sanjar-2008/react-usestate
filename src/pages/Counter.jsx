import '../css/Counter.css'
import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    const countFunction = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <div className='counter'>
                <h1>{props.title}</h1>
                <p>{props.info}</p>
                <button onClick={countFunction}>Click</button>
                <p>I have been toggled {count} times</p>
            </div>
        </div>
    );
}

export default Counter;
