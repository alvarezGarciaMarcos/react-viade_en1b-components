import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';
import React, { useState } from 'react';

const Dashboard = React.memo((props) => {
    const [currentMap, setCurrentMap] = useState(null)
    const routes = [
        {id:0, name: "Hiking Naranco ", author:"César"},
        {id:1,name: "Hiking Ruta de las Xanas", author:"Marcos"},
        {id:2,name: "Senda del Oso", author:"César"},
        
    ]
    const currentSelectedMap = currentMap == null ? <div id='titleHolder'><h1>Routes List</h1></div> : (<div id='titleHolder'>
        <h1>{currentMap.name}</h1> <p> by {currentMap.author}</p>
    </div>)
    return (
        <div className="dashboard container">
            {currentSelectedMap}
            <Row className="row">
                <Col sm={4}><RouteList currentMap={currentMap} onClick={setCurrentMap} routes={routes} /></Col>
                <Col sm={8}><MyMap/></Col>
            </Row>
        </div>
    )
})

export default Dashboard
