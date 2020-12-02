import React from "react";
import "./Loading.css"

import loadingImg from "./images/loading.svg";

const Loading = () => (
    <div className="spinner">
        <img src={loadingImg} alt="Loading..." />
    </div>
);

export default Loading;
