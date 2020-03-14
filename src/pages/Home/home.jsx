import React from 'react';


// Styles
import './style.css';

// Component
import HeroBanner from '../../components/Carousel';

// Images
import MoviePoster from '../../assets/images/movie-poster.jpg';
import HeartIcon from '../../assets/images/heart.png';
import Slider from "react-slick";

function Home(props) {

    const Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
    };


    return (
        <section style={{backgroundColor: '#f2f2f2', height: '100vh'}}>
            <HeroBanner />
            <section className={`second-row`}>
                <div id={`trending-searches`} className={`left-column`}>
                    <h4 className={`heading`}>Trending Searches</h4>
                    <ul className={`movie-list`}>
                        { props.Data.trendingSearches && props.Data.trendingSearches.map((item, index) => {
                            return(
                                <li key={`${item.search}-${index}`}>
                                    <h4 className={`title`}>{item.search}</h4>
                                    <span className={`genre`}>{item.type}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={`right-column`}>
                    <div className={`flex justify-between`}>
                        <h4 className={`heading`}>Recommended Movies</h4>
                        <button className={`btn link`}>View all</button>
                    </div>
                    <div className={`movie-list flex`}>

                        <Slider {...Settings}>
                            {
                                props.Data.recommendedIds && props.Data.recommendedIds.map((id, index) => {
                                    return(
                                        <div className={`movie-card`}>
                                            <div>
                                                <img src={MoviePoster} className={`poster-img`} alt="movie poster"/>
                                            </div>
                                            <div className={`movie-info-container`}>
                                                <img src={HeartIcon}  className={`heart-icon`} alt="heart icon"/>
                                                <span className={`rating`}>{props.movieList[id]['avgRating'] || '80'} %</span>
                                                <div className={`movie-info`}>
                                                    <h4 className={`movie-title`}>{props.movieList[id]['title']}</h4>
                                                    <span className={`movie-genre`}>{props.movieList[id]['genre']}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </section>
    );
}


export default Home;
