import React, {useState} from 'react';
import BookMyShowLogo from '../../assets/images/book-my-show-logo-png-6.png';

import './style.css';

import SearchIcon from '../../assets/images/search-icon.png';
import movieIcon from '../../assets/images/cinema.png';

function TopBar(props) {

    const[movieResult, setResult] = useState([]);
    const[result, showResult] = useState(false);

    const searchMovie = (e) => {
        let movieName = e.target.value;
        let result = props.movieList.filter((movie) => {
            if( movie.title.includes(movieName)){
                return movie;
            }
            else {
                return;
            }
        });
        if(result.length > 0 && movieName.length > 0  ){
            showResult(true);
        }
        else{
            showResult(false);
        }
        setResult(result);
    };


    return (
        <section className={`flex justify-between items-center top-bar`}>
            <div className={`flex items-center relative`}>
                <div className={`logo-container`}>
                    <img className={`w-full`} src={BookMyShowLogo} alt="logo"/>
                </div>
                <div className={`search-bar flex items-center`}>
                    <img src={SearchIcon} className={`search-icon`} alt="search-icon"/>
                    <input type="text" className={`search-input`} onChange={searchMovie} placeholder={`Search for Movies, Events, Plays, Sports, and Activities.`}/>
                </div>
                <div className={`search-results ${result ? 'show' : 'hide'}`}>
                    { movieResult.length > 0 && movieResult.map((movie) => {
                            return(
                                <div key={movie.id} className={`movie-name-container`}>
                                    <div className={`left-div`}>
                                        <img src={movieIcon} alt=""/>
                                    </div>
                                    <div className={`right-div`}>
                                        <h4 className={`movie-name`}>{movie.title}</h4>
                                        <span className={`censor`}>{movie.censor}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
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
