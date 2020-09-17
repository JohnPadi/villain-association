import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cardList/cardList';
import {SearchBox} from './components/search-box/search-box';


class App extends Component{
  constructor(){
    super();
    this.state = {
      villains: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({villains: users}))
  }

  render(){
    const{villains, searchField} = this.state;
    const filteredVillains = villains.filter(villain => 
      villain.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
      <h1>World's Most Wanted Villains</h1>
      <SearchBox
        placeholder = 'Search villains here'
        handleChange = {e => this.setState({searchField: e.target.value})}
      />
      <CardList villains = {filteredVillains}/> 
      
    </div>
  );
  }
}

export default App;
