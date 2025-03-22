import './loadingBar.css';

const LoadingBar = (({value}) => 
    <div className='loadingBarWrapper'>     
        <br></br>
        <br className='chargedBar' style={{width: `${value ?? 30}%`}}></br>
    </div>
);

export default LoadingBar;