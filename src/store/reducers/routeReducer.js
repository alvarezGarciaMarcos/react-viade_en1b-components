const initState = {
    routes : [
        {id:0, name: "Prueba1", author:"César"},
        {id:1,name: "Prueba1", author:"César"},
        {id:2,name: "Prueba1", author:"César"},
        {id:3,name: "Prueba1", author:"César"},
        {id:4,name: "Prueba1", author:"César"},
        {id:5,name: "Prueba1", author:"César"},
        {id:6,name: "Prueba1", author:"César"}
    ],
    selectedRoute: null
}

const routeReducer = (state = initState, action) => {
    switch(action.type){
        case 'SHOW_ROUTE':
            console.log("routed shown", action.route)
    }
    return state
}
export default routeReducer