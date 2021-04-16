import React from 'react'
import { connect } from 'react-redux'
import myHeroes from '../store/defaultValues'
import HeroList from './../Components/HeroList'
import {ConnectedHeroList} from './../Components/HeroList'
import {NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Edit from './edit'
import InnerHeader from './InnerHeader'
import { CardGroup } from 'react-bootstrap'
import SideMenu from './SideMenu'
export const Heroes = (props) =>
    
(
    <div>
        
    <Container>
        <Row>
            <Col sm={3}>
                    
                    <SideMenu/>
                </Col>
                <Col sm={9}>
                <InnerHeader/>
            {
                props.heroes.map((hero) => (   
                    <>
                        {/* <td>{hero.id}</td>
                        <td> <Link to={`/heroes/${hero.id}/${hero.name}`}>{hero.name}</Link></td> */}
                        <CardGroup style={{width:'600px',marginTop:'1.2rem'}}>
                            <ConnectedHeroList key={hero.id} hero={hero} />
                        </CardGroup>
                    </>
                ))
                }
               
        {/* {   <div>
            
            {props.match.params.id && <div><h3>{
                props.heroes.find((heros) => {
                     return heros.id===props.match.params.id
                }).name.toUpperCase()+" is My Hero"
            }</h3><Link to={`/edit/${props.match.params.id}`}><button>view detail</button></Link></div>}

            
            </div>
        } */}
                    {/* <Link to="/addHero">Add Hero</Link> */}
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