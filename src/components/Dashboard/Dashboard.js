import React from 'react'
import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';
import {connect} from 'react-redux'

function Dashboard(props) {
    const {routes} = props
    const {selectedRoute} = props
    console.log(selectedRoute)
    const currentSelectedMap = selectedRoute == null ? <div id='titleHolder'><h1>Routes List</h1></div> : (<div id='titleHolder'>
    <h1>{selectedRoute.name}</h1> <p> by {selectedRoute.author}</p>
</div>)

    return (
        <div className="dashboard container">
            {currentSelectedMap}
            <Row>
                <Col sm={4}><RouteList routes={routes} /></Col>
                <Col sm={8}><MyMap/></Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        routes : state.route.routes,
        selectedRoute : state.route.selectedRoute
    }
}

export default connect(mapStateToProps)(Dashboard)
