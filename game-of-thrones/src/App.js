import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// let one = 'http://anapioficeandfire.com/api/characters/16'
// let two = 'http://www.anapioficeandfire.com/api/houses/378 '
// let three = ' http://www.anapioficeandfire.com/api/houses/229'
// let four = 'http://www.anapioficeandfire.com/api/houses/17'
// let five = 'http://www.anapioficeandfire.com/api/characters/901'
// let six ='http://www.anapioficeandfire.com/api/houses/362'
// let seven = 'http://www.anapioficeandfire.com/api/characters/232'

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
// const requestFour = axios.get(four);
// const requestFive = axios.get(five);
// const requestSix = axios.get(six);
// const requestSeven = axios.get(seven);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      one: 'http://anapioficeandfire.com/api/characters/16',
      two: 'http://www.anapioficeandfire.com/api/houses/378 ',
      three: ' http://www.anapioficeandfire.com/api/houses/229',
      four: 'http://www.anapioficeandfire.com/api/houses/17',
      five : 'http://www.anapioficeandfire.com/api/characters/901',
      six:'http://www.anapioficeandfire.com/api/houses/362',
      seven: 'http://www.anapioficeandfire.com/api/characters/232'
      
    };
  }

// let one = 'http://anapioficeandfire.com/api/characters/16'
// let two = 'http://www.anapioficeandfire.com/api/houses/378 '
// let three = ' http://www.anapioficeandfire.com/api/houses/229'
// let four = 'http://www.anapioficeandfire.com/api/houses/17'
// let five = 'http://www.anapioficeandfire.com/api/characters/901'
// let six ='http://www.anapioficeandfire.com/api/houses/362'
// let seven = 'http://www.anapioficeandfire.com/api/characters/232'

  requestOne = axios.get(one);
  requestTwo = axios.get(two);
  requestThree = axios.get(three);
  requestFour = axios.get(four);
  requestFive = axios.get(five);
  requestSix = axios.get(six);
  requestSeven = axios.get(seven);
 
    componentDidMount() {
      axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive, requestSix, requestSeven])
      .then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        const responseThree = responses[2]
        const responseFour = responses[3]
        const responseFive = responses[4]
        const responseSix = responses[5]
        const responseSeven = responses[6]
      }))
      .catch(error => {
        console.log(error);
      });
    }
  render() {
    return(
      <div>

      </div>
    );
  }
}

export default App;
