import React from 'react'
import MyMap from './MyMap/MyMap'
import './Dashboard.css'
import { Row, Col } from 'react-bootstrap'
import RouteList from '../routes/routelist/RouteList';
import {connect} from 'react-redux'

function Dashboard(props) {
    //console.log(props)
    const {routes} = props
    return (
        <div className="dashboard container">
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
    }
}

export default connect(mapStateToProps)(Dashboard)
