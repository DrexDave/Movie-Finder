import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    constructor () {
        super()
        this.state = {photo: '', clientId:'ca3d0881', result: []}
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(e) {
        this.setState({photo:e.target.value})
    }
    onSubmitTerm = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.photo, this.state.clientId, this.state.result)
    }
    render() {
        return (
            <div className='searchbar'>
                <form action="" onSubmit={this.onSubmitTerm}>
                    <label htmlFor="">Movie Finder</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar
