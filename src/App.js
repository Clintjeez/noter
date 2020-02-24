import React from 'react';
import Home from './component/home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import AddNote from './component/addnote/AddNote'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/AddNote' component={AddNote} />
      </div>
    </BrowserRouter>

  );
}

export default App;
