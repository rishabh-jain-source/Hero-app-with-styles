import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import ConnectedHeroes from '../Components/Heroes'
import {Heroes} from './Heroes'

// const random = [0, 0, 0, 0]
// for (let i = 0; i < 4; i++){
//     const ran = Math.floor(Math.random() * (10) + 11)
//     if (random.includes(ran.toString())) {
//         i--
//     }
//     else {
//         random[i] = ran.toString();
//     }
// }
// console.log(random)


const Dashboard = (props) => (

    <div>
        <Container>
            <Row>
                <Col sm={3}>
                    <NavLink to='/heroes' >Heroes</NavLink>
                </Col>
                <Col sm={9}>
                    
                </Col>
            </Row>
        </Container>
        

        {/* <h1>Dashboard</h1>
        <h3>Top Heroes</h3>
        <Link to={`/edit/${random[0]}`}><button className="button">{props.heroes.find((hero) => {
            return random[0]===hero.id
        }).name.toUpperCase()}</button></Link>
        <Link to={`/edit/${random[1]}`}><button className="button">{props.heroes.find((hero) => {
            return random[1]===hero.id
        }).name.toUpperCase()}</button></Link>
        <Link to={`/edit/${random[2]}`}><button className="button">{props.heroes.find((hero) => {
            return random[2]===hero.id
        }).name.toUpperCase()}</button></Link>
        <Link to={`/edit/${random[3]}`}><button className="button">{props.heroes.find((hero) => {
            return random[3]===hero.id */}
        {/* }).name.toUpperCase()}</button></Link> */}
    </div>
)

const mapStateToProps = (state) => {
    return {
        heroes:state
    }
}

export default connect(mapStateToProps)(Dashboard)