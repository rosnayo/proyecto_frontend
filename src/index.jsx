import React from "react";
import ReactDOMClient from "react-dom/client";
import { Main } from "./screens/Main";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Main />);
