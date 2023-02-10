import { TNode } from "../graph/types"

export const ONTOLOGY_GET_ONTOLOGIES = 'ONTOLOGY_GET_ONTOLOGIES'
export const ONTOLOGY_CREATE_ONTOLOGY = 'ONTOLOGY_CREATE_ONTOLOGY'

export const ONTOLOGY_GET_ITEMS_BY_LABELS = 'ONTOLOGY_GET_ITEMS_BY_LABELS'
export const ONTOLOGY_COLLECT_ENTITY = 'ONTOLOGY_COLLECT_ENTITY'
export const ONTOLOGY_COLLECT_ENTITY_LOADING = 'ONTOLOGY_COLLECT_ENTITY_LOADING'


interface IGetOntologies {
    type: typeof ONTOLOGY_GET_ONTOLOGIES,
    payload: TNode[]
}
interface ICreateOntology {
    type: typeof ONTOLOGY_CREATE_ONTOLOGY,
    payload: TNode
}
interface IGetItemsByLabels {
    type: typeof ONTOLOGY_GET_ITEMS_BY_LABELS,
    payload: TNode[]
}

interface ICollectEntity {
    type: typeof ONTOLOGY_COLLECT_ENTITY,
    payload: TNode
}
interface ILoading {
    type: typeof ONTOLOGY_COLLECT_ENTITY_LOADING,
    payload: boolean
}

export type TOntologyDispatchTypes = IGetOntologies | ICreateOntology | IGetItemsByLabels | ICollectEntity | ILoading