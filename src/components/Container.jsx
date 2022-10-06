import React, { useState } from "react";
import NavBar from "./NavBar";
import TabBar from "./TabBar";

export default function Container() {
    const [page, changePage] = useState("Home");

    

    const renderPage = () => {
        switch(page) {
            case "Home":
                return;
            case "Contact":
                return;
            default:
                return;
        }
    }

    const handlePageChange = (page) => changePage(page);

    return (
        <>
            <NavBar page={page} handlePageChange={handlePageChange} />
            <TabBar />
        </>
    )
}