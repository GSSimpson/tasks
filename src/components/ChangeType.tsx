import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const a = "short_answer_question";
    const aa = "Short Answer";
    const b = "multiple_choice_question";
    const bb = "Multiple Choice";
    let newType: QuestionType;
    let display: string;
    if (type === a) {
        newType = b;
        display = bb;
    } else {
        newType = a;
        display = aa;
    }

    return (
        <div>
            <Button
                onClick={() =>
                    setType(
                        type === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    )
                }
            >
                Change Type
            </Button>
            {type === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
