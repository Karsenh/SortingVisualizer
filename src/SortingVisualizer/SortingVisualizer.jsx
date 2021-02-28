import React, { useState } from "react";
import {getMergeSortAnimations, mergeSort} from '../SortingAlgorithms/MergeSort';
import { Segment, Grid, Label, Input } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
import './SortingVisualizer.css';

// Change this value for the speed of the animations.

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'Chartreuse';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'crimson';


function SortingVisualizer() {

    const [value1, setState] = useState(1);
    const ANIMATION_SPEED_MS = value1;


    const [array, setArray] = useState(() => {
        const freshArray = [];
        for (let i = 0; i < 310; i++) {
            freshArray.push(randomIntFromInterval(5,730));
        }
        return freshArray;
    });



    function resetArray() {

        const newArray = [];

        for (let i = 0; i < 310; i++) {
            newArray.push(randomIntFromInterval(5,730));
        }

        setArray(newArray);
    }

    function merge() {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);                                                                 
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    
    }

    function quickSort() {

    }

    function heapSort() {

    }

    function bubbleSort() {

    }

    function updateValue() {

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
            <div>
                <button onClick={ resetArray }>Generate New Array</button>
                <button onClick={ merge }>Merge Sort</button>
                <button onClick={ quickSort } disabled>Quick Sort</button>
                <button onClick={ heapSort } disabled>Heap Sort</button>
                <button onClick={ bubbleSort } disabled>Bubble Sort</button>
            </div>

            <Segment>
            <h1>Sort Speed</h1>
            <p>
              <Slider
                color="red"
                inverted={false}
                settings={{
                  start: {value1},
                  min: 1,
                  max: 100,
                  step: 1,
                  onChange: value => {
                    setState(
                      value
                    );
                  }
                }}
              />
            </p>
            <Label color="red">{value1} ms</Label>
          </Segment>

        </div>
    );

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;