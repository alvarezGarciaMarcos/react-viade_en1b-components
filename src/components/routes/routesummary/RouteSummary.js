import React from 'react'
import { Card } from 'react-bootstrap'

export default function RouteSummary(props) {
    const {route} = props
    return (
        <Card>
            <Card.Body>
                <Card.Title>{route.name}</Card.Title>
                <Card.Subtitle>{route.author}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
