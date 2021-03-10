import React from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import Ship from './componants/pages/Ship';
import Home from './componants/pages/Home';
import Gallery from './componants/pages/Gallery';
import Overview from './componants/pages/Overview';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      
   <Router>
      <Navbar />
    
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Ship' component={Ship}/>
        <Route path='/Overview' component={Overview}/>

        <Route path='/Gallery' component={Gallery}/>

        
        
      </Switch>
   </Router>
     
    </>
  );
}

export default App;
