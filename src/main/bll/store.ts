import {applyMiddleware} from "redux";
import {createStore} from "redux";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/loginReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {page404Reducer} from "./reducers/page404Reducer";
import {profileReducer} from "./reducers/profileReducer";
import {testReducer} from "./reducers/test";
import {passwordRecoveryReducer} from "./reducers/passwordRecoveryReducer";
import {enteringNewPasswordReducer} from "./reducers/enteringNewPasswordReducer";

let reducers = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    page404: page404Reducer,
    profile: profileReducer,
    test: testReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringNewPasswordReducer: enteringNewPasswordReducer
})

export type AppStatePropsType = ReturnType<typeof reducers>


let store = createStore(reducers, applyMiddleware(thunk));


export default store




