import './loadingBar.css';

const LoadingBar = (({value, total}) => {

    let percentage = Math.min(Math.max((value / total ?? 100) * 100, 0), 100);

    return <div className='loadingBarWrapper'>     
        <br></br>
        <br className='chargedBar' style={{width: `${percentage ?? 0}%`}}></br>
    </div>
}
);

export default LoadingBar;