import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  componentDidMount() {
    //console.log('hi I am the componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  render() {
    console.log('render from app');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1 className="app-title">Summer's Monster Army</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
