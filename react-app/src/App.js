import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {makeHeavyRequestAsync, makeRequestLikeANoob} from './service/service';
import { exampleOfSynchronousFunction } from './service/synchronous';
import { exampleOfAsyncFunction } from './service/async';
import {Button} from 'react-bootstrap';

class App extends React.Component {

  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
         <Button variant="primary" onClick={this.handleClick}>+</Button>{' '}
          <p className='number-box'>Count: {this.state.count}</p>
        </div>
        <Button variant="danger" className='margin' onClick={makeRequestLikeANoob}>Make Request Like a Noob</Button>
        <Button variant="danger" className='margin' onClick={exampleOfSynchronousFunction}>Make Heavy Request Sync</Button>
        <Button variant="success" className='margin' onClick={makeHeavyRequestAsync}>Make Heavy Request Async</Button>
        <Button variant="success" className='margin' onClick={exampleOfAsyncFunction}>Run async example</Button>
        </header>
      </div>
    );
  }
}

export default App;
