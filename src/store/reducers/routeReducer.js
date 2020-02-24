const initState = {
    routes : [
        {id:0, name: "Prueba1", author:"César"},
        {id:1,name: "Prueba2", author:"César"},
        {id:2,name: "Prueba3", author:"César"},
        {id:3,name: "Prueba4", author:"César"},
        {id:4,name: "Prueba5", author:"César"},
        {id:5,name: "Prueba6", author:"César"},
        {id:6,name: "Prueba7", author:"César"}
    ],
    selectedRoute: null
}

const routeReducer = (state = initState, action) => {
    switch(action.type){
        case 'SHOW_ROUTE':
            console.log("routed shown", action.route)
            return {...state}
        default:
            return state
    }
}
export default routeReducer