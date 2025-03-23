import "./buttonBase.css";
import BorderElement from "../borderElement/borderElement";

const ButtonBase = (({content})=>
    <button className="buttonBase">
        <BorderElement></BorderElement>
        {content}
    </button>
);

export default ButtonBase;