import React ,{Component} from 'react';
import CardAray from './CardArray';
import './App.css'
import SearchBox from './SearchBox.js';
import {robots} from './Robots.js';
import Scroll from './Scroll';
class App extends Component {
constructor()
{
  super();
  this.state={
    robots:robots,
    searchfield:''
  }
} 
onSearchChange=(event)=>{
  this.setState({searchfield: event.target.value})
}
render(){
const filteredrobots=this.state.robots.filter(robots=>{
  return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})

  return (
<div className='tc'>
<h1><strong>Robo Friends</strong></h1>
<SearchBox SearchChange={this.onSearchChange} />
<Scroll>
<CardAray robots={filteredrobots} />
</Scroll>
</div>
    );
}
}
export default App;
