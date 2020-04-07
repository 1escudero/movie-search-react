import React from 'react';


export class SearchBar extends React.Component {
    state = { result: '', type: '', language: '' }

    onLanguageChange = (event) => {
        this.setState({ language: event.target.value })
    }

    onTypeChange = (event) => {
        this.setState({ type: event.target.value })
    }

    onFormChange = (event) => {
        this.setState({ result: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.result, this.state.type, this.state.language)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="ui fluid large action input" style={{ width: '75%', left: '12.5%', top: '20px', marginBottom: '100px', fontSize: '17px' }}>
                    <input type="text" value={this.state.result} placeholder="Search..." onChange={this.onFormChange} />
                    <div className="custom-select">
                        <select onClick={this.onTypeChange} className="ui compact selection dropdown" defaultValue={''} required>
                            <option value="" disabled="disabled">Select a type</option>
                            <option value="movie">Movies</option>
                            <option value="person">People</option>
                            <option value="tv">TV Shows</option>
                        </select>
                    </div>
                    <div className="custom-language">
                        <select onClick={this.onLanguageChange} className="ui compact selection dropdown" defaultValue={''} required>
                            <option value="" disabled="disabled">Select a Language</option>
                            <option value="en-US">English</option>
                            <option value="es">Spanish</option>
                            <option value="pt-BR">Portuguese</option>
                        </select>
                    </div>
                    <button className="ui animated inverted green button" type="submit" tabIndex="0">
                        <div className="visible content">Search</div>
                        <div className="hidden content">
                            <i className="search icon" />
                        </div>
                    </button>
                </div>
            </form>
        );
    }
}  