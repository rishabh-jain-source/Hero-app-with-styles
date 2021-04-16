import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard'
import ConnectedHeroes from './Components/Heroes'
import Header from './Components/Header';

import { addHero,removeHero } from './Actions/heroes'
import store from './store/configStore'
import HeroList from './Components/HeroList';
import { ConnectedEdit } from './Components/edit'
import AddHero from './Components/AddHero';
import About from './Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
 
store.dispatch(addHero({ id: '20', name: 'Tornado' }))



//console.log(heroOne)
const NoFound = () => (
  <h1>No Component Found</h1>
)


const MyRoutes=()=>(

  <BrowserRouter>
    <Header/>
    <Switch>
    <Route path='/' component={ConnectedHeroes} exact={true}/>
      
      <Route path='/heroes' component={ConnectedHeroes} />
      <Route path='/heroes/:id' component={ConnectedHeroes} ></Route>
      <Route path='/addHero' component={AddHero} exact={true}/>
      <Route path='/edit/addHero' component={AddHero} exact={true}></Route>
      <Route path='/edit/:id' component={ConnectedEdit} ></Route>
      <Route path='/about' component={About}></Route>
      <Route component={NoFound} ></Route>
    </Switch>
   
  </BrowserRouter>
 
)

const jsx = (
  <Provider store={store}>
    <MyRoutes/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))


reportWebVitals();
