import React from "react";
import App from "./App.jsx";
import {createRoot} from "react-dom/client";
import AsyncCounter from "./AsyncCounter.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
    <AsyncCounter/>
    <Timer/>
</React.StrictMode>
);