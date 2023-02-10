import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TNode } from '../../actions/graph/types';
import { getItemsByLabels } from '../../actions/ontology/ontology';
import { ONTOLOGY_GET_ITEMS_BY_LABELS } from '../../actions/ontology/types';
import { RootStore } from '../../store';
import { getNodeLabel, readLabel, SERVER_URL } from '../../utils';

interface IItemSelectorButtonProps {
    title: string,
    onChange: (node: TNode) => void,
    labels: string[],
    ontology_uri: string,
    selected: TNode,
    custom_q?: string
}

const ItemSelectorButton: React.FunctionComponent<IItemSelectorButtonProps> = (props) => {

    const dispatch = useDispatch()
    // const itemsState = useSelector((state: RootStore) => state.ontology.items_by_labels)
    const [itemsState, setItemsState] = React.useState<TNode[]>([])
    const [selectorMenu, setSelectorMenu] = React.useState(false)

    const onLoad = async () => {
        const body = JSON.stringify({ ontology_uri: props.ontology_uri, labels: props.labels, custom_q: props.custom_q })
        var response = await axios.post(SERVER_URL + '/getItemsByLabels', body)
        const items: TNode[] = response.data
        setItemsState(items)
    }
    React.useEffect(() => {

        onLoad()
        // dispatch(getItemsByLabels(props.ontology_uri, props.labels, props.custom_q))

    }, [, selectorMenu])


    const [search, setSearch] = React.useState('')
    return <>


        <label>{props.title}</label>
        <div className='form-main-item-selector-button-container'>
            {selectorMenu && <>
                <div className='form-main-item-selector-button-window'>
                    <div className='form-main-item-selector-button-window-search'>
                        <span><i className='fas fa-search'></i></span>
                        <input placeholder='Поиск' value={search} onChange={e => setSearch(e.target.value)}></input>
                    </div>
                    <div className='form-main-item-selector-button-window-items'>
                        <button className={!props.selected ? 'form-main-item-selector-button-window-items-selected' : ''} onClick={_ => { props.onChange(null); setSelectorMenu(false) }}>Не указано</button>
                        {itemsState.map(node => {
                            const selected = props.selected && props.selected.data.uri === node.data.uri ? 'form-main-item-selector-button-window-items-selected' : ''
                            return <button className={selected} onClick={_ => { props.onChange(node); setSelectorMenu(false) }}>{getNodeLabel(node)}</button>
                        })}
                    </div>
                </div>
            </>}
            <button onClick={_ => setSelectorMenu(true)} className='form-main-item-selector-button'>
                {getNodeLabel(props.selected)}
            </button>
        </div>


    </>;
};

export default ItemSelectorButton;
