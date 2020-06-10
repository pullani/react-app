import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


// For instructor version: https://github.com/aneagoie/robofriends


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/pullani/react-app/master/userdoc')
    .then(response => response.json())
    .then(users => {
      this.setState({ robots : users })
    }); 
  }



  //Inbuilt function
  //It is not : onSearchChange (event) { : It is a rule, for any fn you make, it should have the things 
  //created by the class. So it has to be passed clearly. If it is a react function, no eed for arrow function.
  onSearchChange = (event) => {
    this.setState({  searchfield: event.target.value }) //React feature. We dont have to do this.state.searchfield = 
    //console.log( event.target.value);
  }


  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    //onsole.log(filteredRobots);
    if (this.state.robots.length === 0){
      return <h1 className='f2 tc'>RoboFriends Loading...</h1>
    } 

    if (filteredRobots.length === 0){
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <h1 className='f1'>No matching results!</h1>
          </Scroll>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={ filteredRobots}/>
          </Scroll>
        </div>
      );
    }
    
  }
}

export default App;
