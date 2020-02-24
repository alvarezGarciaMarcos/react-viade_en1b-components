import React, { useContext } from "react";
import RouteSummary from "./../routesummary/RouteSummary";
import { ThemeContext } from '../../Layout/ThemeContext/ThemeContext'
import './RouteList.css'

export default function RouteList({ routes, onClick, currentMap }) {

  const theme = useContext(ThemeContext)
  const activeStyle = {
    backgroundColor: theme.primary,
    color: theme.secondary
  }
  

  const nonActiveStyle = {
    cursor: 'pointer'

  }

  const getTheme = (routeId, currentMapId) => {
    return (routeId == currentMapId) ? activeStyle : nonActiveStyle
  }


  const summaries = routes.map((route, id) => {

    return (
      (currentMap) ? <RouteSummary style={getTheme(route.id, currentMap.id)} id={route.id == currentMap.id ? 'active' : ''} onClickHandle={onClick} route={route}></RouteSummary>
        : <RouteSummary style={nonActiveStyle} onClickHandle={onClick} route={route}></RouteSummary>
    )
  });
  return (
    summaries
  );
}
