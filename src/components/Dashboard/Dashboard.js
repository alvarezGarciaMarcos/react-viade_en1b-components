import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';
import React, { useState } from 'react';

export default function Dashboard(props) {
    const [currentMap, setCurrentMap] = useState(null)
    const routes = [
        {id:0, name: "Hiking Naranco ", author:"César"},
        {id:1,name: "Hiking Ruta de las Xanas", author:"Marcos"},
        {id:2,name: "Senda del Oso", author:"César"},
        
    ]
    const currentSelectedMap = currentMap == null ? null : <h1>{currentMap.name}</h1>
    return (
        <div className="dashboard container">
            {currentSelectedMap}
            <Row>
                <Col sm={4}><RouteList onClick={setCurrentMap} routes={routes} /></Col>
                <Col sm={8}><MyMap/></Col>
            </Row>
        </div>
    )
}
