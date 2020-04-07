import React from 'react';

const Header = () => {
    return (
        <h1 className="ui centered aligned icon header">
            <i className="film icon" href="/" />
            <div className="content">
                MOVIE SEARCHER
            </div>
            <div className="sub header">Search more information about a Movie, Actor and TV Show for free! </div>
            <div className="sub header">Available in 3 different languages.</div>
        </h1>
    );
}

export default Header;