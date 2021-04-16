import React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Heroes } from './Heroes'
import { removeHero } from './../Actions/heroes'
import { Card } from 'react-bootstrap'
import './../style/custom-button.css';
import {BiEdit} from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import MyModal from './MyModal'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import '../style/box-style.css'
const removeClick = (props) => {
    props.dispatch(removeHero(props.hero.id))
    console.log("click")
}


const HeroList = (props) => {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
    
        <Card style={{ marginBottom: '1.2rem' }}>
    
            <Card.Body>
                <Card.Title>{props.hero.name}</Card.Title>
      
            </Card.Body>
            <Card.Footer>
                <div style={{ display: 'flex' }}>
                    
                    <button onClick={handleShow} className="text-muted my-custom-button"><AiFillDelete />  Remove</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton className="edit-title">
                            <Modal.Title>Deleting { props.hero.name.toUpperCase()} Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you wants to Remove</Modal.Body>
                        <Modal.Footer>
                            <button onClick={handleClose} className="text-muted my-custom-button" style={{ width: '100px' ,fontWeight:'bold'}}>Close</button>
                            <button className=" my-custom-button" style={{width:'200px'}} onClick={() => { removeClick(props) }}><AiFillDelete />  Remove
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <Link to={`/edit/${props.hero.id}`} className="text-muted my-custom-button" ><BiEdit />  Edit</Link>
                </div>
            </Card.Footer>
        </Card>
       
        
           
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export const ConnectedHeroList = connect(mapDispatchToProps)(HeroList)


export default HeroList

    
