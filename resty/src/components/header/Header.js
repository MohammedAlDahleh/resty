import React from "react";

function Header() {
    return (
        <>
            <header>
                <h1 data-testid='header'>RESTy</h1>
                <nav>
                    <a href="/"> Home </a>
                    <a href="/"> History</a>
                    <a href="/"> Help</a>
                </nav>
            </header>
        </>
    )
}

export default Header; 