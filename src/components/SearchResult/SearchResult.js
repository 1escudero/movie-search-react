import React from 'react';
import './SearchResult.css';

const SearchResult = (props) => {
    const results = props.results.map((result) => {

        let star = "Title:"
        let bullhorn = "Overview:"
        let info = "Release Date:"
        let tag = "/10"

        if (props.type === "person") {
            result.title = result.name
            result.vote_average = result.popularity
            result.poster_path = result.profile_path
            result.release_date = result.known_for_department
            result.overview = result.known_for[0].title
            star = "Name:"
            bullhorn = "Known For:"
            info = "Department:"
            tag = "votes"
        } else if (props.type === "tv") {
            result.title = result.name
            result.release_date = result.first_air_date
        }

        return (
            <div className="ui card" key={result.id}>
                <p className="ui red ribbon label" style={{ position: 'absolute', zIndex: '10', left: '-15px', top: '-2px' }}>{result.vote_average} {tag}</p>
                <img className="ui large image" src={"https://image.tmdb.org/t/p/w500/" + result.poster_path} alt="Image" style={{ position: 'relative', width: '365px', height: '540px' }} />
                <div className="ui relaxed divided list">
                    <div className="item">
                        <div className="content">
                            <p className="header" style={{ marginBottom: '15px', fontSize: '16px' }}>
                                <i className="star middle aligned icon" style={{ marginTop: '-10px' }} />
                                {star}
                            </p>
                            <div className="description" style={{ fontSize: '16px' }}>{result.title}</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content">
                            <p className="header" style={{ marginBottom: '15px', fontSize: '16px' }}>
                                <i className="bullhorn middle aligned icon" style={{ marginTop: '-10px' }} />
                                {bullhorn}
                            </p>
                            <div className="description" style={{ fontSize: '16px' }}>{result.overview}</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="content">
                            <p className="header" style={{ marginBottom: '15px', fontSize: '16px' }}>
                                <i className="info circle middle aligned icon" style={{ marginTop: '-10px' }} />
                                {info}
                            </p>
                            <div className="description" style={{ fontSize: '16px', marginBottom: '10px' }}>{result.release_date}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return <div className="card-list">{results.slice(0, 12)}</div>
}

export default SearchResult