import React, {Component} from 'react'
import store from './src/public/redux/store';
import BottomNavigation from './src/route/AppNavigation'
import {Provider} from 'react-redux';

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        
        <BottomNavigation/>
       </Provider>
    )
  }
}
