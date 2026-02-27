// mergeNode.js — Merge multiple inputs into one output

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { SelectField, CheckboxField } from './NodeField';

export const MergeNode = ({ id, data }) => {
    const [strategy, setStrategy] = useState(data?.strategy || 'concatenate');
    const [deduplicate, setDeduplicate] = useState(data?.deduplicate || false);

    return (
        <BaseNode
            id={id}
            title="Merge"
            icon="🔗"
            color="#14b8a6"
            handles={[
                {
                    type: 'target',
                    position: Position.Left,
                    id: `${id}-input-a`,
                    style: { top: '35%' },
                },
                {
                    type: 'target',
                    position: Position.Left,
                    id: `${id}-input-b`,
                    style: { top: '65%' },
                },
                {
                    type: 'source',
                    position: Position.Right,
                    id: `${id}-output`,
                },
            ]}
        >
            <SelectField
                label="Strategy"
                value={strategy}
                onChange={setStrategy}
                options={[
                    { value: 'concatenate', label: 'Concatenate' },
                    { value: 'zip', label: 'Zip' },
                    { value: 'union', label: 'Union' },
                    { value: 'intersect', label: 'Intersect' },
                ]}
            />
            <CheckboxField
                label="Remove duplicates"
                checked={deduplicate}
                onChange={setDeduplicate}
            />
        </BaseNode>
    );
};
