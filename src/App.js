import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
