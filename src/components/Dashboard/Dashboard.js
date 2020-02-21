import React from 'react'
import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <div className="dashboard container">
            <Row>
                <Col sm={4}></Col>
                <Col sm={8}><MyMap/></Col>
            </Row>
        </div>
    )
}
