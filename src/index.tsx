import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/app";

const element = <App name="quickerer" />;

ReactDOM.render(
    element,
    document.getElementById("root")
);