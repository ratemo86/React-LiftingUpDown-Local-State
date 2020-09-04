import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchableListUp from './components-up-local-state/searchlist.component'

import SearchableListDown from './components-down-local-state/searchlist.component'
function App() {
  return (
    <div>

    {/* <p>
    The Search component knows about the query that could be
used to filter the list, but the List component doesn’t know about it. You have to lift the state of
the Search component up to the SearchableList to make the query state accessible for the List
component in order to filter the list. You want to share the query state in both List component and
Search component.
    </p> */}
    <SearchableListUp>

</SearchableListUp>
    {/* <p>
    The SearchableList takes care about the archiving functionality.
However, it doesn’t need the functionality itself. It only passes all the state to the List component
as props. It manages the state on behalf of the List component. In a scaling application it would
make sense to lift the state down to the List component. Even though the List component becomes
a stateful component afterward, it is step in the right direction keeping the local state maintainable
in the long run.
    </p> */}


    <SearchableListDown>

    </SearchableListDown>
    </div>

  );

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React77

        </a>
      </header>
    </div>
  ); */
}

export default App;
