import React, { useContext } from "react";
import RouteSummary from "./../routesummary/RouteSummary";
import { ThemeContext } from '../../Layout/ThemeContext/ThemeContext'
import './RouteList.css'

const RouteList = React.memo(({ routes, onClick, currentMap }) => {

  const theme = useContext(ThemeContext)

  const summaries = routes.map((route, id) => {

    return (
      (currentMap) ? <RouteSummary id={route.id == currentMap.id ? 'active' : ''} onClickHandle={onClick} route={route}></RouteSummary>
        : <RouteSummary onClickHandle={onClick} route={route}></RouteSummary>
    )
  });
  return (
    summaries
  );
})

export default RouteList
