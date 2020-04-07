import React from 'react';
import themoviedb from '../api/api';
import Header from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import Key from '../api/key';

class App extends React.Component {
    state = { results: [], type: "" }
    onSearchSubmit = async (result, type, language) => {
        const response = await themoviedb.get(`${type}?api_key=${Key}&language=${language}&query=${result}`)

        this.setState({
            results: response.data.results,
            type: type
        })

        console.log(this.state.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '25px' }}>
                <Header />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchResult results={this.state.results} type={this.state.type} />
            </div>
        );
    }
}

export default App;