import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    /*
    function Doubler(): JSX.Element {
        return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    }

    function Halver(): JSX.Element {
        useState(dhValue);
        return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    }
    */
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
        </div>
    );
}
