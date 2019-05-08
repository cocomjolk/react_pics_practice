import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

// unsplash key: 3fb6e8717bbc4f73fe855b6b03ff488774d74b8938b48e9885fcee4819a4617f

class App extends React.Component {
  state = {
    images: [] ,
    pic: "https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNDA1fQ"
  };

   onSearchSubmit = async (term) => {
    const response = await axios.get( 'https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID 3fb6e8717bbc4f73fe855b6b03ff488774d74b8938b48e9885fcee4819a4617f'
      }
    })

    this.setState({
      images: response.data.results,
      pic: response.data.results[0].urls.small
     })
    // console.log('Seach term is : ', term)
    // console.log(response.data.results[0].urls.small)
    console.log(response.data.results);
  }

  render(){
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        App Booya!
        <SearchBar whenSubmitted={this.onSearchSubmit} />
        <img src={this.state.pic} alt=""/>
      </div>
    )
  }
}

export default App;
