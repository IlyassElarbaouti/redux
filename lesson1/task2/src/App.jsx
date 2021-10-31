import React, { Component } from 'react'
import Header from './Header.jsx'
import { UserContext } from './user-context.js';

export default class App extends Component {
  state={
    userData:{
      name:'Nikola Tesla',
      avatar_url:"https://avatars3.githubusercontent.com/u10001"
    }
  }
  render() {
    return (
      <DataContext.Provider value={this.state.userData}>
        <Header />
      </DataContext.Provider>
    );
  }
}
