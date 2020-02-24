import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';
import React, { useState } from 'react';

const Dashboard = React.memo((props) => {
    const [currentMap, setCurrentMap] = useState(null)
    const routes = [
        { id: 0, name: "Hiking Naranco ", author: "César" },
        { id: 1, name: "Hiking Ruta de las Xanas", author: "Marcos" },
        { id: 2, name: "Senda del Oso", author: "César" },
        { id: 3, name: "Hiking Naranco", author: "César" },
        { id: 4, name: "Senda del Oso", author: "César" },
        { id: 5, name: "Ruta de las Xanas", author: "Raúl" },
        { id: 6, name: "Pista Finaldesa", author: "Marcos" },
        { id: 7, name: "Hiking Naranco ", author: "César" },
        { id: 8, name: "Hiking Ruta de las Xanas", author: "Marcos" },
        { id: 9, name: "Senda del Oso", author: "César" },
        { id: 10, name: "Hiking Naranco", author: "César" },
        { id: 11, name: "Senda del Oso", author: "César" },
        { id: 12, name: "Ruta de las Xanas", author: "Raúl" },
        { id: 13, name: "Pista Finaldesa", author: "Marcos" },
        


    ]
    const currentSelectedMap = currentMap == null ? <div id='titleHolder'><h1>Routes List</h1></div> : (<div id='titleHolder'>
        <h1>{currentMap.name}</h1> <p> by {currentMap.author}</p>
    </div>)
    return (
        <div className="dashboard container">
            {currentSelectedMap}
            <RouteList currentMap={currentMap} onClick={setCurrentMap} routes={routes} />
            <MyMap />

        </div>
    )
})

export default Dashboard
