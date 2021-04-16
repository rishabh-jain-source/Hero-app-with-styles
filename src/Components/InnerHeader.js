import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link, Router } from 'react-router-dom'
import './../style/inner-tab.css'
import { IoIosAdd } from 'react-icons/io';
import {BiRefresh} from 'react-icons/bi'
import AddHero from './AddHero';
const InnerHeader = () => {

  const redirectRoute = () => {
    console.log('dhu')
    let myUrl = window.location.href;
    //console.log(myUrl)
    if (myUrl == 'http://localhost:3000/edit/addHero') {
      console.log(myUrl);
      //window.location.href = 'http://localhost:3000/';
     
    }
}

  return (
    <Nav variant="tabs" style={{ borderBottom: 'none', marginTop: '1.6rem' }} >
      <Nav.Item className='my-tab'>
        <Nav.Link ><Link to="heroes" className="inner-tab ">HEROES</Link></Nav.Link>
      </Nav.Item>
            
      <Nav.Item>
        <Nav.Link><Link to='addHero' onClick={redirectRoute} className="inner-tab"><IoIosAdd /></Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to='heroes' className="inner-tab"><BiRefresh /></Link></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
export default InnerHeader