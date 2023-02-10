import React from 'react';
import { useDispatch } from 'react-redux';
import { getBezierPath } from 'reactflow';
import { deleteRelation } from '../../actions/graph/graph';
import { TNodeData } from '../../actions/graph/types';
import { getArcLabel, useKeyPress } from '../../utils';

export default function MainEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    data,
    markerEnd,
}) {
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const data_l: TNodeData = data
    const isCtrlPress = useKeyPress('Control')
    const dispatch = useDispatch()



    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <text>
                <textPath
                    href={`#${id}`}
                    style={{ fontSize: '12px' }}
                    startOffset="20%"
                    textAnchor="left"
                    onClick={_ => isCtrlPress && dispatch(deleteRelation(data_l.ontology_uri, data_l.id))}
                >
                    {getArcLabel(data)}
                </textPath>
            </text>
        </>
    );
}