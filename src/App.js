import React, {Component} from 'react';
import './App.css';
import CardList from './Components/Card-List/CardList';
import Searchbox from './Components/Searchbox/Searchbox';

class App extends Component{
  constructor(){
    super();
    this.state = {
        monsters:[],
        searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }


  handeChange = event =>{
    this.setState({searchField:event.target.value})
  }

  render(){
    const{monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder='search monsters' handeChange={this.handeChange}/>
        <CardList  monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
