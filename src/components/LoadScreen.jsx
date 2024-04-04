import '../scss/LoadScreen.scss'

function LoadScreen() {
    return ( 
        <div className="loader-container">
            <img src="./public/black-logo.svg" alt="" />
            <span className="loader"></span>
        </div>
     );
}

export default LoadScreen
