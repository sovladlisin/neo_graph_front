import { combineReducers } from "redux";
import alertReducer from "./alerts/alerts";
import { graphReducer } from "./graph-reducer";
import { ontologyReducer } from "./ontology-reducer";
import { settingsReducer } from "./settings-reducer";



const RootReducer = combineReducers({
    alerts: alertReducer,
    graph: graphReducer,
    ontology: ontologyReducer,
    settings: settingsReducer,
});

export default RootReducer