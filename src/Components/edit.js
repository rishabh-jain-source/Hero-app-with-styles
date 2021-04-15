import React from 'react'
import { connect } from 'react-redux'
import { editHero } from './../Actions/heroes';
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './../style/box-style.css'

//let history = useHistory();
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.hero.name,
            id: this.props.match.params.id ? this.props.match.params.id : '',
            error:''
        }
    }
    nameChange = (e) => {
        const name = e.target.value;
        this.setState(() => {
            return {
                name:name
            }
        })
    }
    cancel = () => {
        this.props.history.goBack()
    }
    formSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        if (!this.state.name) {
            this.setState(() => {
                return {
                    error:'Enter Name First'
                }
            })
        }
        else {
            
            this.props.editHero(this.props.match.params.id, this.state.name)
            this.props.history.goBack()
        }
        
        //useHistory().goBack();
        
        
    }
    
    
    render() {
        return (
            <div>
                <Container>
        <Row>
            <Col sm={3}>
                <NavLink to='/heroes' >Heroes</NavLink>
                </Col>
                <Col sm={9}>
                <div className="box-style">
                <h3 className="edit-title">{this.state.name ? `${this.state.name.toUpperCase()}` : ''}</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <Form onSubmit={this.formSubmit} className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder={this.state.id} disabled></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Name' value={this.state.name} onChange={this.nameChange}/>
                        </Form.Group>
                                    <Button onClick={this.formSubmit} className="save-button">Save</Button>
                    
                                    <Button onClick={this.cancel}>Cancel</Button>
                                </Form>
                </div>
                        </Col>
                    </Row>
                    </Container>
            </div>

        )
    }
}
let myElement=(state,id)=>{
    for (let i = 0; i < state.length; i++){
        if (state[i].id === id) {
            return state[i]
        }
    }
}
const mapStateToProps = (state, props) => {
    console.log(state,props.match.params.id)
    return {
        //hero: myElement(state,parseInt(props.match.params.id))
        hero:state.find((heros) => {
                return heros.id===props.match.params.id
            })
        
    }
}
const mapDispatchToState = (dispatch, props) => {
    return {
        editHero: (id, name) => dispatch(editHero( id, {name }))
    }
}
export const ConnectedEdit=connect(mapStateToProps,mapDispatchToState)(Edit)
export default Edit