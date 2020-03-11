import React from 'react';
import BookMyShowLogo from '../../assets/images/book-my-show-logo-png-6.png';

import './style.css';

import SearchIcon from '../../assets/images/search-icon.png';

function TopBar(props) {
    return (
        <section className={`flex justify-between items-center top-bar`}>
            <div className={`flex items-center`}>
                <div className={`logo-container`}>
                    <img className={`w-full`} src={BookMyShowLogo} alt="logo"/>
                </div>
                <div className={`search-bar flex items-center`}>
                    <img src={SearchIcon} className={`search-icon`} alt="search-icon"/>
                    <input type="text" className={`search-input`} placeholder={`Search for Movies, Events, Plays, Sports, and Activities.`}/>
                </div>
            </div>
            <div className={`nav-list-container`}>
                <ul className={`nav-items-list flex items-center`}>
                    <li>NCR</li>
                    <li>English</li>
                    <li><button className={`transparent-border-btn`}>Sign In</button></li>
                </ul>
            </div>
        </section>
    );
}


export default TopBar;
