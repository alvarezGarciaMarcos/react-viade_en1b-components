import React from "react";
import RouteSummary from "./../routesummary/RouteSummary";
import ReactScrollableList from "react-scrollable-list";


export default function RouteList({ routes }, props) {
  const summaries = routes.map(route => {
    return {
      id: route.id,
      content: <RouteSummary route={route} key={route.id}></RouteSummary>
    };
  });
  return (
    <ReactScrollableList
      listItems={summaries}
      heightOfItem={25}
      maxItemsToRender={5}
    />
  );
}