import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    function setMessage() {
        let winMessage: string = left === right ? "win" : "Playing";
        winMessage = left === right && right === 1 ? "lose" : winMessage;
        return winMessage;
    }
    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={() => setLeft(d6)}>Roll Left</Button>
                {left}
            </span>
            <span data-testid="right-die">
                <Button onClick={() => setRight(d6)}>Roll Right</Button>
                {right}
            </span>
            <span>{setMessage()}</span>
        </div>
    );
}
