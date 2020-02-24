import React from 'react'
import { Card } from 'react-bootstrap'
import {showRoute} from './../../../store/actions/routeActions'
import { connect } from "react-redux";


function RouteSummary(props) {
    const {route} = props
    return (
        <Card onClick={() => props.showRoute(route)}>
            <Card.Body>
                <Card.Title>{route.name}</Card.Title>
                <Card.Subtitle>{route.author}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      showRoute: (route) => dispatch(showRoute(route))
    }
  }
  
  export default connect(null, mapDispatchToProps)(RouteSummary)
  





