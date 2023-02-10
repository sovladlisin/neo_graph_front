import axios from "axios"
import { Dispatch } from "react"
import { SERVER_URL } from "../../utils"
import { withToken } from "../auth/auth"
import { ONTOLOGY_COLLECT_ENTITY, ONTOLOGY_COLLECT_ENTITY_LOADING, ONTOLOGY_CREATE_ONTOLOGY, ONTOLOGY_GET_ITEMS_BY_LABELS, ONTOLOGY_GET_ONTOLOGIES, TOntologyDispatchTypes } from "./types"

export const getOntologies = () => (dispatch: Dispatch<TOntologyDispatchTypes>) => {
    axios.get(SERVER_URL + '/getOntologies').then(res => {
        dispatch({
            type: ONTOLOGY_GET_ONTOLOGIES,
            payload: res.data
        })
    }).catch((err) => {

    })
}

export const createOntology = (uri: string, title: string[], comment: string) => (dispatch: Dispatch<TOntologyDispatchTypes>) => {
    const body = JSON.stringify({ uri, title, comment })
    axios.post(SERVER_URL + '/createOntology', body).then(res => {
        dispatch({
            type: ONTOLOGY_CREATE_ONTOLOGY,
            payload: res.data
        })
    }).catch((err) => {

    })
}

export const getItemsByLabels = (ontology_uri: string, labels: string[], custom_q?: string) => (dispatch: Dispatch<TOntologyDispatchTypes>) => {
    const body = JSON.stringify({ ontology_uri, labels, custom_q })
    const params = withToken()

    axios.post(SERVER_URL + '/getItemsByLabels', body, params).then(res => {
        dispatch({
            type: ONTOLOGY_GET_ITEMS_BY_LABELS,
            payload: res.data
        })
    }).catch((err) => {

    })
}

export const collectEntity = (ontology_uri: string, uri: string) => (dispatch: Dispatch<TOntologyDispatchTypes>) => {
    dispatch({
        type: ONTOLOGY_COLLECT_ENTITY_LOADING,
        payload: true
    })
    const params = withToken({ ontology_uri, uri })
    axios.get(SERVER_URL + '/collectEntity', params).then(res => {
        dispatch({
            type: ONTOLOGY_COLLECT_ENTITY,
            payload: res.data
        })
        dispatch({
            type: ONTOLOGY_COLLECT_ENTITY_LOADING,
            payload: false
        })
    }).catch((err) => {
        dispatch({
            type: ONTOLOGY_COLLECT_ENTITY_LOADING,
            payload: false
        })
    })
}

