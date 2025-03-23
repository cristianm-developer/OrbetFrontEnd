import "./badge.css";
import LoadingBar from '../loadingBar/loadingBar'
import { useContext } from "react";
import { ProjectContext } from "../../domains/project/ProjectContext";

const Badge = (() => {

    let project = useContext(ProjectContext);

    return <a className="badge"> 
        <img className="badgeImage" style={{filter: `drop-shadow(0px 0px 15px ${project.glowColor ?? 'white'})`}} src={project.badgeImg}/>
        <b className="titleBadge fontController">{project.name}</b>    
        <div className="extendedVersion">
            <div className="loadingBarWrapper">
                <LoadingBar value={project.actualAmount} total={project.objetiveAmount}></LoadingBar>
            </div>
            <div className="moneyAmountWrapper">
                <span className="moneyHaving">{new Intl.NumberFormat('en-Us', {style: 'currency', currency:'USD'}).format(project.actualAmount)}</span>
                <span className="moneyObjetive">{new Intl.NumberFormat('en-Us', {style: 'currency', currency:'USD'}).format(project.objetiveAmount)}</span>
            </div>
        </div>
        <div className="shortVersion">
            <span>{new Intl.NumberFormat('en-Us', {style: 'currency', currency:'USD'}).format(project.actualAmount)}</span>
        </div>
    </a>
});

export default Badge