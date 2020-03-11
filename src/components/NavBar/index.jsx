import React from 'react';


import './style.css';

function index(props) {
    return (
        <nav className={`nav-bar flex justify-between`}>
            <ul className={`nav-list color-gray flex items-center`}>
                <li className={`on-hover-color-white cursor-pointer`}>Movies</li>
                <li className={`on-hover-color-white cursor-pointer`}>Events</li>
                <li className={`on-hover-color-white cursor-pointer`}>Plays</li>
                <li className={`on-hover-color-white cursor-pointer`}>Sports</li>
                <li className={`on-hover-color-white cursor-pointer`}>Activities</li>
                <li className={`on-hover-color-white cursor-pointer`}>Monuments</li>
                <li className={`on-hover-color-white cursor-pointer`}>Fanhood</li>
                <li className={`on-hover-color-white cursor-pointer`}>Buzz</li>
            </ul>
            <ul className={`nav-list color-gray flex items-center`}>
                <li className={`on-hover-color-white cursor-pointer`}>Corporate</li>
                <li className={`on-hover-color-white cursor-pointer`}>Offers</li>
                <li className={`on-hover-color-white cursor-pointer`}>Gift cards</li>
            </ul>
        </nav>
    );
}



export default index;
