import React from 'react';
import Nav from '../NavBar';
import TopBar from '../TopBar';

import './style.css'

function index(props) {
    return (
        <header className={`header`}>
            <div className={`top-bar-container`}>
                <TopBar movieList={props.movieList}/>
            </div>
            <div className={`nav-bar-container`}>
                <Nav />
            </div>
        </header>
    );
}



export default index;
