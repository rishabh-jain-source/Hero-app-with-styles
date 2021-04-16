import React from 'react'
import { v4 as uuid } from 'uuid'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './../style/box-style.css'
import InnerHeader from './../Components/InnerHeader'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import './../style/custom-button.css'
import SideMenu from './SideMenu'
class AddHeroForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            name: this.props.name ? this.props.name : '',
            error:''
        }
    }
    cancel = () => {
        this.props.history.goBack()
    }
    formSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name) {
            this.setState(() => {
                return {
                    error:'Enter Name First'
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    error:""
                }
            })
            this.props.onSubmit({
                id: this.state.id,
                name:this.state.name
            })
            console.log("hek")
        }

    }
    // cancel = () => {
    //     this.props.history.goBack()
    // }
    inputChange = (e) => {
        console.log(this.state.name)
        this.setState(() => {
            return {
                name: e.target.value,
                
            }
        })
    }
    
    render() {
        return (
            <div>
                
                 <Container>
        <Row>
            <Col sm={3}>
            <SideMenu/>
                </Col>
                        <Col sm={9}>
                            <InnerHeader />
                            <CardGroup style={{ width: '600px', marginTop: '1.2rem' }}>
                                
                            
                            <div className="box-style">
                            <h3 className="edit-title">{this.state.name ? `${this.state.name.toUpperCase()}` : ''}</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <Form onSubmit={this.formSubmit} className='form'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder={this.state.id} disabled></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Name' value={this.state.name} onChange={this.inputChange}/>
                        </Form.Group>
                    
                                    </Form>
                                    <Card.Footer>
                                    <button onClick={this.formSubmit} className="my-custom-button">Save</button>
                                    </Card.Footer>
                                </div>
                                
                                </CardGroup>
                        </Col>
                    </Row>
                    </Container>
            </div>
        )
    }
}


export default AddHeroForm