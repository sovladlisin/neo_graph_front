import { TNode } from "../actions/graph/types"
import { ONTOLOGY_COLLECT_ENTITY, ONTOLOGY_COLLECT_ENTITY_LOADING, ONTOLOGY_CREATE_ONTOLOGY, ONTOLOGY_GET_ITEMS_BY_LABELS, ONTOLOGY_GET_ONTOLOGIES, TOntologyDispatchTypes } from "../actions/ontology/types"

interface IDefaultState {
    ontologies: TNode[],
    items_by_labels: TNode[],
    collected_entity: TNode,
    collected_entity_loading: boolean,
}

const defaultState: IDefaultState = {
    ontologies: [],
    items_by_labels: [],
    collected_entity: null,
    collected_entity_loading: false,
}

export const ontologyReducer = (state: IDefaultState = defaultState, action: TOntologyDispatchTypes) => {
    switch (action.type) {
        case ONTOLOGY_COLLECT_ENTITY_LOADING:
            return {
                ...state,
                collected_entity_loading: action.payload
            }
        case ONTOLOGY_COLLECT_ENTITY:
            return {
                ...state,
                collected_entity: action.payload
            }
        case ONTOLOGY_GET_ITEMS_BY_LABELS:
            return {
                ...state,
                items_by_labels: action.payload
            }

        case ONTOLOGY_CREATE_ONTOLOGY:
            return {
                ...state,
                ontologies: [...state.ontologies, action.payload]
            }

        case ONTOLOGY_GET_ONTOLOGIES:
            return {
                ...state,
                ontologies: action.payload,
            }

        default:
            return state
    }
}

