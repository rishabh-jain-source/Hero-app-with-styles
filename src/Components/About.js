import React from 'react'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

import SideMenu from './SideMenu'
import InnerHeader from './InnerHeader'
const About = () => (
    <div>
        <Container>
        <Row>
            <Col sm={3}>
                    
                <SideMenu/>
            </Col>
            <Col sm={9}>
                <InnerHeader />
            </Col>
        </Row>
        </Container>
    </div>
)
export default About