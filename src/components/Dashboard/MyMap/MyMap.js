import React, { Component } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class MyMap extends Component {

    componentDidMount(){
        this.map = L.map('map', {
            center: [43.3605977, -5.8448989],
            zoom: 15,
            zoomControl: false
        });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);
    }
    render() {
        return (
            <Wrapper width="1280px" height="720px" id="map"/>
        )
    }
}

