import React, { useState } from "react";

export default function NavBar() {
    const [user, setUser] = useState(false);
    const googleSignIn = () => {
        setUser(true);
    };
    const signOut = () => {
        setUser(false)
    };

    return (
    <>
        <nav class="nav-bar">
            <a class="logo" href="./index.html">
                <img src="./logo-no-background.png" alt="we are g chat." width="320" height="90" />

                <a class="sign-in" href="/">Sign in</a>
            </a>
        </nav>
    </>
    );
}