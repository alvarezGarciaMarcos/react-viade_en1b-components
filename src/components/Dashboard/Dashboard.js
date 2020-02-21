import React from 'react'
import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';

export default function Dashboard(props) {
    const routes = [
        {id:0, name: "Prueba1", author:"César"},
        {id:1,name: "Prueba1", author:"César"},
        {id:2,name: "Prueba1", author:"César"},
        {id:3,name: "Prueba1", author:"César"},
        {id:4,name: "Prueba1", author:"César"},
        {id:5,name: "Prueba1", author:"César"},
        {id:6,name: "Prueba1", author:"César"}
    ]
    return (
        <div className="dashboard container">
            <Row>
                <Col sm={4}><RouteList routes={routes} /></Col>
                <Col sm={8}><MyMap/></Col>
            </Row>
        </div>
    )
}
