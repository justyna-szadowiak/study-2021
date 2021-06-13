import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    function getTime() { return (new Date()).toLocaleTimeString() }

    return ( 
    <div>
        <div>
            Current time:
        </div>
        <h3>{getTime()}</h3>
        <input type="time" value={getTime()} />
    </div>
    );
};

ReactDOM.render( <App/> , document.querySelector('#root'));