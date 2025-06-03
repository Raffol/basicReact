import React from "react";
import App from "./App.jsx";
import {createRoot} from "react-dom/client";
import AcyncCounter from "./AcyncCounter.jsx";

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
    <AcyncCounter/>
</React.StrictMode>
);