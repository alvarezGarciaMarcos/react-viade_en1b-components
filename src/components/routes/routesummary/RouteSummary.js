import React from 'react'
import { Card } from 'react-bootstrap'
import './RouteSummary.css'

const activeStyle = {
    backgroundColor: 'red'
  }
  
const RouteSummary = React.memo((props) => {
    const {route} = props

    const handleClick = (e) => {
        e.preventDefault();
        props.onClickHandle(route)
    }


    return (
        (
            <Card style={props.style} id={props.id} onClick={handleClick} >
                <Card.Body>
                    <Card.Title>{route.name}</Card.Title>
                    <Card.Subtitle>{route.author}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    )
})

export default RouteSummary
