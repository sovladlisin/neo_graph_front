import React, { useEffect, useLayoutEffect, useRef, useState, useCallback, useMemo } from 'react';

import { Handle, Position } from 'reactflow';
import { TNode } from '../../actions/graph/types';
import { getNodeColorClass, getNodeLabel, useOnClickOutside } from '../../utils';
import NodeMenu from './NodeMenu';


export default function MainNode(node: TNode) {
    const [isHovering, setIsHovering] = useState(false)
    const [showNodeMenu, setShowNodeMenu] = useState(false)
    var className = getNodeColorClass(node)
    className = node.data.is_highlighted ? className + ' highlighted-node' : className

    const hangleStyle = {
        background: 'white',
        width: '15px',
        borderRadius: '10px'
    }
    return (
        <>
            <div onMouseEnter={_ => setIsHovering(true)} onMouseLeave={_ => setIsHovering(false)}>

                <Handle isValidConnection={(connection) => true}
                    // onConnect={(params) => console.log('handle onConnect', params)} 
                    type="target" position={Position.Bottom} style={{ ...hangleStyle }} />
                <div style={showNodeMenu ? { zIndex: 8 } : {}} className={'node-meta-container ' + className} >
                    {!isHovering && <p>{getNodeLabel(node)}</p>}
                    {isHovering && <>
                        <div className='node-meta-buttons-container'>

                            <button onClick={_ => setShowNodeMenu(true)}><i className='fas fa-ellipsis-v' /></button>
                            <button onClick={_ => node.data.onToggle(node.data.uri)}><i className='fas fa-eye' /></button>
                        </div>
                    </>}


                </div>
                <Handle isValidConnection={(connection) => true}
                    // onConnect={(params) => console.log('handle onConnect', params)}
                    type="source" position={Position.Top} style={{ ...hangleStyle }} id="a" />

                {node.data.is_toggled && <span className='node-hidden-count'>{node.data.toggled_data.length}</span>}
            </div>
            {showNodeMenu && <NodeMenu node={node} onClose={() => setShowNodeMenu(false)} />}
        </>
    )
}