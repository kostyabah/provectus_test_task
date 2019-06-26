import { createStore, applyMiddleware, bindActionCreators } from "redux"
import thunk from "redux-thunk"
function asyncWare({ dispatch, getState }) {
    //console.log({dispatch, getState})
    return next => action => {

        if (typeof action == "string") {
            let url = "https://jsonplaceholder.typicode.com/"//+ action.getAjax;
            return fetch(url + action).then(res => res.json())
        } else {
            return next(action)
        }
    }
}
//routers : ["users", "posts", "photos", "comments", "alboms", "todos"],
export default createStore((state = {}, action) => {
    console.log(action)
    if (action.type !== 'go_to_back')
        state.back = Object.assign({}, state)
    else {
        return state.back
    }
    switch (action.type) {

        case "asdgf":
        default:
            return state;
    }
}, applyMiddleware(asyncWare))