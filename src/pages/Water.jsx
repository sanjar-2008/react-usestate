import { useState } from "react";
import '../css/Water.css'
const Water = () => {
    const [count, setCount] = useState(0);
    const [water, setWater] = useState('Ice');

    const modeWater = (change) => {
        setCount((prevCount) => prevCount + change);

        if (count + change > 0 && count + change < 100) {
            setWater('Water');
        } else if (count + change >= 100) {
            setWater('Vapor');
        } else if (count + change <= 0) {
            setWater('Ice');
        }
    };


    return (
        <div>
            <div className='water'>
                <div className={`water-item ${water}`}>
                    <span>{water}</span>
                    <span>{count}</span>
                </div>
                <div className='water-button'>
                    <button onClick={() => modeWater(1)}>+</button>
                    <button onClick={() => modeWater(10)}>+10</button>
                    <button onClick={() => modeWater(-1)}>-</button>
                    <button onClick={() => modeWater(-10)}>-10</button>
                </div>
            </div>
        </div>
    );
}

export default Water;
