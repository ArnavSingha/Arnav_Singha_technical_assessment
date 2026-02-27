// conditionNode.js — Conditional branching node

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './NodeField';

export const ConditionNode = ({ id, data }) => {
    const [field, setField] = useState(data?.field || 'value');
    const [operator, setOperator] = useState(data?.operator || 'equals');
    const [compareValue, setCompareValue] = useState(data?.compareValue || '');

    return (
        <BaseNode
            id={id}
            title="Condition"
            icon="🔀"
            color="#ef4444"
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-input` },
                {
                    type: 'source',
                    position: Position.Right,
                    id: `${id}-true`,
                    style: { top: '35%' },
                },
                {
                    type: 'source',
                    position: Position.Right,
                    id: `${id}-false`,
                    style: { top: '65%' },
                },
            ]}
        >
            <TextField label="Field" value={field} onChange={setField} placeholder="field name" />
            <SelectField
                label="Operator"
                value={operator}
                onChange={setOperator}
                options={[
                    { value: 'equals', label: 'Equals' },
                    { value: 'not_equals', label: 'Not Equals' },
                    { value: 'contains', label: 'Contains' },
                    { value: 'greater_than', label: 'Greater Than' },
                    { value: 'less_than', label: 'Less Than' },
                ]}
            />
            <TextField
                label="Value"
                value={compareValue}
                onChange={setCompareValue}
                placeholder="compare to…"
            />
        </BaseNode>
    );
};
