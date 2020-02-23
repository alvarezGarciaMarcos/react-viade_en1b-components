import React from 'react'
import { Card } from 'react-bootstrap'
import "./RouteSummary.css"
import { useState } from 'react'

const  RouteSummary = React.memo((props) => {
    
    const [route, setRoute] = useState(props.route)
    const handleClick = (e) => {
        e.preventDefault();
        props.onClickHandle(route)   
    }

    return (
        <Card onClick={handleClick}>
            <Card.Body>
                <Card.Title>{route.name}</Card.Title>
                <Card.Subtitle>{route.author}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
})

export default RouteSummary
