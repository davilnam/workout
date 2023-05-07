import userReducer from "./userReducer";
import workoutReducer from "./workoutReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";


const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const userConfig = {
    ...commonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'user']
}

const workoutConfig = {
    ...commonConfig,
    key: 'workout',
    whitelist: ['data']
}


const rootReducer = combineReducers({
    user: persistReducer(userConfig, userReducer),
    workout: persistReducer(workoutConfig, workoutReducer),
})

export default rootReducer