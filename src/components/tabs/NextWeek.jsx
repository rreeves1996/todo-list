import React from "react";
import Week from "./Week";

export default function NextWeek() {
    return (
        <>
            <h1>
                <strong>Next week</strong>
            </h1>
            <Week week={"Next Week"} />
        </>
    )
}