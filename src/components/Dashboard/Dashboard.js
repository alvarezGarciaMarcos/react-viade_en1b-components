import React from 'react'
import MyMap from './MyMap/MyMap'

export default function Dashboard() {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    
                </div>
                <div className="col s12 m5 offset-m1">
                    <MyMap></MyMap>
                </div>
            </div>
        </div>
    )
}
