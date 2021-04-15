import React from 'react'
import { connect } from 'react-redux'
import myHeroes from '../store/defaultValues'
import HeroList from './../Components/HeroList'
import {ConnectedHeroList} from './../Components/HeroList'
import {NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Edit from './edit'
export const Heroes = (props) =>
    
(
    <div>
        
    <Container>
        <Row>
            <Col sm={3}>
                <NavLink to='/heroes' >Heroes</NavLink>
                </Col>
                <Col sm={9}>
        <h1>Heroes</h1>
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {
                props.heroes.map((hero) => (   
                    <>
                        {/* <td>{hero.id}</td>
                        <td> <Link to={`/heroes/${hero.id}/${hero.name}`}>{hero.name}</Link></td> */}
                        
                        <ConnectedHeroList key={hero.id} hero={hero} />
                    </>
                ))
                }
                </tbody>
        </table>
        {/* {   <div>
            
            {props.match.params.id && <div><h3>{
                props.heroes.find((heros) => {
                     return heros.id===props.match.params.id
                }).name.toUpperCase()+" is My Hero"
            }</h3><Link to={`/edit/${props.match.params.id}`}><button>view detail</button></Link></div>}

            
            </div>
        } */}
                    <Link to="/addHero">Add Hero</Link>
                    </Col>
            </Row>
        </Container>

        
        </div>
        
)

const mapStateToProps = (state) => {
   
    return {
        heroes: state
    }
}

const ConnectedHeroes = connect(mapStateToProps)(Heroes);
export default ConnectedHeroes;