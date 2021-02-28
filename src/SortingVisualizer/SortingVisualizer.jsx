import React, { useState } from "react";
import './SortingVisualizer.css';


function SortingVisualizer() {

    const [array, setArray] = useState(() => {
        const freshArray = [];
        for (let i = 0; i < 310; i++) {
            freshArray.push(randomIntFromInterval(5,730));
        }
        return freshArray;
    });

    // componentDidMount() {
    //     this.resetArray();
    // }

    function resetArray() {

        const newArray = [];

        for (let i = 0; i < 310; i++) {
            newArray.push(randomIntFromInterval(5,730));
        }

        setArray(newArray);
    }

    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div 
                    className="array-bar" 
                     key={ idx }
                    style={{height: `${value}px`}}>
                </div>
            ))}
            <button onClick={ resetArray }>Generate New Array</button>
        </div>
    );

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;