import axios from 'axios';
import React from 'react'
import SearchBar from './SearchBar'
import MovieHandler from './MovieHandler'

class App extends React.Component {
  constructor() {
    super()
    this.state = {pictures: []}
  }

  onTermSubmit = (photo, clientId, result) => {
    const url = "https://www.omdbapi.com/?s="+photo+"&apikey="+clientId
    axios.get(url)
    .then((response) => {
      console.log(response);
      result = response.data.Search
      this.setState({pictures: result})

    })
  }
  render() {
    return <div>
              <SearchBar onTermSubmit={this.onTermSubmit} />
              <MovieHandler photos={this.state.pictures} />  
          </div>
    
  }
}

export default App
