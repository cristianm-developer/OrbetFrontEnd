import "./badge.css";
import LoadingBar from '../../loadingBar/loadingBar'

const Badge = (() => {
    return <a className="badge"> 
        <img className="badgeImage" src="imgs/Shield.png"/>
        <b className="titleBadge fontController">COMET RANK</b>    
        <div className="extendedVersion">
            <div className="loadingBarWrapper">
                <LoadingBar></LoadingBar>
            </div>
            <div className="moneyAmountWrapper">
                <span className="moneyHaving">$10,876.90</span>
                <span className="moneyObjetive">$50,000.00</span>
            </div>
        </div>
        <div className="shortVersion">
            <span>$10,876.90</span>
        </div>
    </a>
});

export default Badge