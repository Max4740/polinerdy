import {memo, useState} from "react";
//import "./style.scss";
import {Link} from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss"

const HomePage = () => {
    return (
    <> 
    <div className="coming_soon">
        COMING SOON...
    </div>
    </>
    );
};
 
export default memo(HomePage);