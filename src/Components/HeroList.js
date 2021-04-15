import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Heroes } from './Heroes'
import { removeHero } from './../Actions/heroes'

const removeClick = (props) => {
    props.dispatch(removeHero(props.hero.id))
    console.log("click")
}

const HeroList = (props) => (
    <tr>
        <td>{props.hero.id}</td>
        <td> <Link to={`/heroes/${props.hero.id}`} className="table-row">{props.hero.name}</Link></td>
        <td><Link to={`/edit/${props.hero.id}`}>Edit</Link></td>
        <td><button onClick={() => { removeClick(props) }}>Remove</button></td>
        {/* <td>{props.hero.name}</td> */}
        
    </tr>
           
)

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export const ConnectedHeroList = connect(mapDispatchToProps)(HeroList)


export default HeroList

    
