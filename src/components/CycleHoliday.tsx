import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "New Years Day"
        | "July 4th"
        | "Halloween"
        | "Thanksgiving"
        | "Christmas";
    function nextAlpha(holiday: Holiday) {
        if (holiday === "Christmas") {
            return "Halloween";
        } else if (holiday === "Halloween") {
            return "July 4th";
        } else if (holiday === "July 4th") {
            return "New Years Day";
        } else if (holiday === "New Years Day") {
            return "Thanksgiving";
        } else {
            return "Christmas";
        }
    }
    function nextDate(holiday: Holiday) {
        if (holiday === "New Years Day") {
            return "July 4th";
        } else if (holiday === "July 4th") {
            return "Halloween";
        } else if (holiday === "Halloween") {
            return "Thanksgiving";
        } else if (holiday === "Thanksgiving") {
            return "Christmas";
        } else {
            return "New Years Day";
        }
    }
    function render(holiday: Holiday) {
        if (holiday === "New Years Day") {
            return "Holiday: 🎉";
        } else if (holiday === "July 4th") {
            return "Holiday: 🎇";
        } else if (holiday === "Halloween") {
            return "Holiday: 🎃";
        } else if (holiday === "Thanksgiving") {
            return "Holiday: 🦃";
        } else {
            return "Holiday: 🎄";
        }
    }
    const [holiday, setHoliday] = useState<Holiday>("New Years Day");
    return (
        <div>
            <Button onClick={() => setHoliday(nextAlpha(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextDate(holiday))}>
                Advance by Year
            </Button>
            <h1>{render(holiday)}</h1>
        </div>
    );
}
