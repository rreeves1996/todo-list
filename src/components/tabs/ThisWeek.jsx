import React from "react";
import Week from "./Week";

export default function ThisWeek() {
    return (
        <>
            <h1>
                <strong>This week</strong>
            </h1>
            <Week week={"This Week"} />
        </>
    )
}