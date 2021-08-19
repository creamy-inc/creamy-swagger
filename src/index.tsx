import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";
const App = () => (
    <div className="App">
        <SwaggerUI url="https://api.mna.dev.spsapps.net/swagger/?format=openapi" />
    </div>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
