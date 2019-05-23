import React, { Component } from 'react';

import { Link } from 'react-router-dom';

 class Navigation extends Component {
     render() {
        return (
            <div>
                <div className="App">
                    <h1> Vertical Jump Tracker </h1>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/goals">Goals</Link>
                    </div>
                    <button onClick={() => localStorage.removeItem('token')} > Logout</button>
                </div>
            </div>
        );
    };
}
export default Navigation;