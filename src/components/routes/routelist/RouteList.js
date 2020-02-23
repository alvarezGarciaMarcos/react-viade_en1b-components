import React from "react";
import RouteSummary from "./../routesummary/RouteSummary";
import ReactScrollableList from "react-scrollable-list";

export default function RouteList({ routes, onClick }) {
   
  const summaries = routes.map(route => {
    return (
      <RouteSummary onClickHandle={onClick} route={route}></RouteSummary>
    )
  });
  return (
    summaries
  );
}
