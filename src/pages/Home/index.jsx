import React from 'react';
import HeroBanner from '../../components/Carousel';

import './style.css';
import MoviePoster from '../../assets/images/movie-poster.jpg';

function index(props) {
    return (
        <section style={{backgroundColor: '#f2f2f2', height: '100vh'}}>
            <HeroBanner />
            <section className={`second-row`}>
                <div id={`trending-searches`} className={`left-column`}>
                    <h4 className={`heading`}>Trending Searches</h4>
                    <ul className={`movie-list`}>
                        <li>
                            <h4 className={`title`}>Tanhaji: The Unsung Warrior</h4>
                            <span className={`genre`}>Movies</span>
                        </li>
                        <li>
                            <h6 className={`title`}>Tanhaji: The Unsung Warrior</h6>
                            <span className={`genre`}>Movies</span>
                        </li>
                        <li>
                            <h6 className={`title`}>Tanhaji: The Unsung Warrior</h6>
                            <span className={`genre`}>Movies</span>
                        </li>
                        <li>
                            <h6 className={`title`}>Tanhaji: The Unsung Warrior</h6>
                            <span className={`genre`}>Movies</span>
                        </li><li>
                        <h6 className={`title`}>Tanhaji: The Unsung Warrior</h6>
                        <span className={`genre`}>Movies</span>
                    </li>
                    </ul>
                </div>
                <div className={`right-column`}>
                    <div className={`flex justify-between`}>
                        <h4 className={`heading`}>Recommended Movies</h4>
                        <button className={`btn link`}>View all</button>
                    </div>
                    <div className={`flex movie-list justify-between`}>
                        <img src={MoviePoster} alt="movie poster"/>
                        <img src={MoviePoster} alt="movie poster"/>
                        <img src={MoviePoster} alt="movie poster"/>
                    </div>
                </div>
            </section>
        </section>
    );
}

index.propTypes = {};
index.defaultProps = {};

export default index;
