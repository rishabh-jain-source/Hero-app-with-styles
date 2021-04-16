import React from 'react'
import { NavLink } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import './../style/box-style.css'

const SideMenu = () => {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }
    return (
        <div>
        <ListGroup style={{marginTop:'1.6rem'}}>
    <ListGroup.Item>
             <NavLink to='/heroes' activeClassName='is-active'>Heroes</NavLink>
      
    </ListGroup.Item>

    <ListGroup.Item>
      <NavLink to="/about">About</NavLink>
    </ListGroup.Item>
  </ListGroup>
            </div>
    )
}
export default SideMenu