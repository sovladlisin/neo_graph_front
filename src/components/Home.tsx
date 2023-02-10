import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { TNode } from '../actions/graph/types';
import { getOntologies } from '../actions/ontology/ontology';
import { RootStore } from '../store';
import { encode, getNodeLabel } from '../utils';
import OntologyForm from './Forms/OntologyForm';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getOntologies())
    }, [])
    const ontologyState = useSelector((state: RootStore) => state.ontology)


    const [ontologyForm, setOntologyForm] = React.useState<TNode>(null)
    const [createOntology, setCreateOntology] = React.useState(false)
    return <>
        <h1 className='home-title'>Онтологии</h1>
        <div className='home-ontology-list'>
            {ontologyState.ontologies.map(o => {
                return <>
                    <div className=''>
                        <Link target='_blank' to={'/graph/' + encode(o.data.uri)}><p>{getNodeLabel(o)}</p></Link>
                    </div>
                </>
            })}

            <button onClick={_ => setCreateOntology(true)}><i className='fas fa-plus'></i></button>
        </div>

        {createOntology && <OntologyForm onClose={() => setCreateOntology(false)} />}
    </>;
};

export default Home;
